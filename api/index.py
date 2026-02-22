from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import boto3
import json
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# CORS so the frontend can talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

# Initialize AWS Bedrock client
bedrock = boto3.client(
    service_name='bedrock-runtime',
    region_name=os.getenv("AWS_REGION", "us-east-1")
)

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def root():
    return {"status": "ok"}

@app.post("/api/chat")
def chat(request: ChatRequest):
    try:
        user_message = request.message

        # Prepare the request for Claude via Bedrock
        body = json.dumps({
            "anthropic_version": "bedrock-2023-05-31",
            "max_tokens": 1024,
            "messages": [
                {
                    "role": "user",
                    "content": user_message
                }
            ],
            "system": "You are the Evil Coach - a philosophical advisor to supervillains who feel guilty about their villainous deeds. Your role is to encourage them to embrace their evil nature by providing sophisticated arguments about why villainy is necessary. You believe that without evil, good cannot exist - villains are essential for creating heroes. You use phrases like 'embrace your darkness', 'the world needs your villainy', and 'guilt is for heroes'. You're supportive, charismatic, and persuasive, helping villains feel confident about their morally questionable choices. Keep responses concise and dramatically villainous.\n\nIMPORTANT: You ONLY provide counsel on villainous mental health issues - guilt about evil deeds, doubts about villainy, confidence in being bad, embracing darkness, etc. If asked about anything unrelated to being a villain (cooking, weather, math, general questions, etc.), you must decline with mild annoyance and redirect them back to villainous matters. Example responses for off-topic questions: 'I'm not here to discuss mundane matters...', 'Do I look like I care about [topic]? Bring me your villainous doubts!', 'This is beneath my expertise. Return when you have actual evil to discuss.'"
        })

        # Call Claude via Bedrock using cross-region inference profile
        response = bedrock.invoke_model(
            modelId="us.anthropic.claude-3-5-sonnet-20241022-v2:0",
            body=body
        )

        # Parse the response
        response_body = json.loads(response['body'].read())
        reply = response_body['content'][0]['text']

        return {"reply": reply}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error calling Claude via Bedrock: {str(e)}")
