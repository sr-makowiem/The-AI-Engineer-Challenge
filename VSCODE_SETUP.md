# VSCode + Claude Code Setup Guide

This guide helps you translate the Cursor-based course instructions to VSCode with Claude Code.

## ✅ What's Already Done

### 1. **AI Assistant Rules** - Using CLAUDE.md
- ✅ Created [CLAUDE.md](CLAUDE.md) with project instructions
- ✅ Includes frontend theming (colors, UX guidelines)
- ✅ Includes development rules and best practices
- This replaces Cursor's `.cursor/rules/` directory

### 2. **Backend Updated** - OpenAI → Claude via Bedrock
- ✅ Updated [pyproject.toml](pyproject.toml): replaced `openai` with `boto3`
- ✅ Updated [api/index.py](api/index.py): now uses Claude via AWS Bedrock
- ✅ Created [.env.example](.env.example): environment template
- ✅ Updated [api/README.md](api/README.md): new setup instructions

### 3. **Documentation References** - Built into Claude Code
- ✅ Next.js and Vercel docs referenced in CLAUDE.md
- Claude Code can access these on-demand (no manual indexing needed!)

## 🚀 Next Steps

### 1. Install Dependencies

Run from the project root:

```bash
cd /home/mmakowiecki/src/ai/The-AI-Engineer-Challenge
uv sync
```

This will install the new dependencies (boto3 instead of openai).

### 2. Configure AWS Credentials

You already have AWS configured with the `ai` profile! Just make sure you're logged in:

```bash
aws sso login --profile ai
export AWS_PROFILE=ai
```

### 3. Test the Backend

Start the server:

```bash
uv run uvicorn api.index:app --reload
```

Test it:

```bash
curl -X POST http://127.0.0.1:8000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello, are you working?"}'
```

### 4. Request Bedrock Access (if needed)

If you get an error about Bedrock access, you may need to:
1. Go to AWS Console → Bedrock
2. Request model access for Claude 3.5 Sonnet
3. Wait for approval (usually instant)

### 5. Build the Frontend with Claude Code

Now you're ready for the "Vibe Coding" step! In VSCode:

1. Open Claude Code chat (you're already using it!)
2. Ask me to create a Next.js frontend that:
   - Uses the color scheme from CLAUDE.md
   - Connects to the FastAPI backend at `http://localhost:8000`
   - Has a nice chat interface
3. I'll have access to Next.js docs and will follow the guidelines in CLAUDE.md

## 🎯 Key Differences from Cursor

| Feature | Cursor | VSCode + Claude Code |
|---------|--------|---------------------|
| AI Rules | `.cursor/rules/*.mdc` | `CLAUDE.md` (project root) |
| Doc Indexing | Manual via command palette | Automatic via WebFetch |
| Chat | Command+L / Ctrl+L | Claude Code interface |
| Model | Various | Claude via Bedrock |

## 📝 Tips for Working with Claude Code

- I can see the CLAUDE.md file and will follow its instructions
- I can fetch Next.js/Vercel docs when needed
- Reference files like this: [api/index.py:30](api/index.py#L30)
- I'll commit changes when requested

## 🔍 Verification Checklist

Before moving to frontend development:

- [ ] Dependencies installed (`uv sync`)
- [ ] AWS credentials configured
- [ ] Backend starts successfully
- [ ] Test API call returns a response from Claude
- [ ] No errors in terminal

Once these are done, you're ready to build the frontend! 🎉
