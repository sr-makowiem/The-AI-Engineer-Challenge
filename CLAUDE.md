# AI Engineer Challenge - Project Instructions

This project is a learning exercise to build an LLM-powered application with a FastAPI backend and Next.js frontend.

## Project Structure

- `/api` - FastAPI backend using Claude via AWS Bedrock
- `/frontend` - Next.js frontend (to be created)
- Uses `uv` for Python dependency management

## Development Rules

### General Guidelines
- Always commit changes when updating code
- Write well-documented code (self-documenting or commented)
- Work on a single feature at a time
- Explain decisions thoroughly

### Frontend Development
- Use **Next.js** for the frontend
- Pay attention to visual clarity and contrast
- Ensure pleasant UX (boxes grow to fit contents, etc.)
- Use password-style text entry for sensitive information
- Focus on local development and testing
- Always provide instructions for running the UI

### Color Scheme & Theming
- Primary: Soft blues and greens (calming, supportive)
- Accent: Warm orange (#FF8C42)
- Background: Light gray (#F5F5F5)
- Text: Dark gray (#333333)
- Focus on accessibility and readability

### Backend
- Uses **Claude via AWS Bedrock** (not OpenAI)
- Model: `us.anthropic.claude-3-5-sonnet-20241022-v2:0` (inference profile)
- FastAPI with CORS enabled for local development
- AWS Profile: `ai` for authentication

## Key Documentation

When building the frontend, reference:
- Next.js docs: https://nextjs.org/docs
- Claude API via Bedrock: https://docs.aws.amazon.com/bedrock/latest/userguide/

## Development Focus

- **Local development only** - no deployment needed
- Backend runs locally via `uv run uvicorn`
- Frontend runs locally via `npm run dev`
- Both should be testable at `localhost`
