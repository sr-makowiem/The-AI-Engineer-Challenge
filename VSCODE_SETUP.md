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
- ✅ Next.js docs referenced in CLAUDE.md
- Claude Code can access these on-demand (no manual indexing needed!)

### 4. **Development Focus**
- ✅ Configured for **local development only**
- ✅ No deployment to Vercel or other platforms
- ✅ Backend and frontend run on localhost

### 5. **VSCode Launch Configuration**
- ✅ Created [.vscode/launch.json](.vscode/launch.json) - Press **F5** to run!
- ✅ Created [.vscode/tasks.json](.vscode/tasks.json) - Task definitions
- ✅ Automatically starts both backend and frontend
- ✅ Opens browser to http://localhost:3000
- ✅ **Shift+F5** automatically stops all servers cleanly

## 🚀 Quick Start

### Press F5 to Launch Everything! ⚡

The easiest way to run the application:

1. **Open the project in VSCode**
2. **Make sure AWS is logged in**: Run `aws sso login --profile ai` in terminal
3. **Press F5** (or Run > Start Debugging)
4. **Browser opens automatically** to http://localhost:3000

That's it! Both backend and frontend will start automatically.

See [.vscode/README.md](.vscode/README.md) for more details.

## 🔧 Manual Setup (if needed)

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
- I can fetch Next.js docs when needed
- Reference files like this: [api/index.py:30](api/index.py#L30)
- I'll commit changes when requested
- This setup is for local development only - no deployment needed

## 🎮 Running the Application

### Option 1: Press F5 (Recommended)

Simply press **F5** in VSCode. This will:
- Start the backend server
- Start the frontend server
- Open your browser to http://localhost:3000

### Option 2: Run Manually

If you prefer to run servers manually:

**Backend** (Terminal 1):
```bash
export AWS_PROFILE=ai
uv run uvicorn api.index:app --reload
```

**Frontend** (Terminal 2):
```bash
cd frontend
npm run dev
```

Then open http://localhost:3000 in your browser.

## 🔍 Verification Checklist

- [x] Dependencies installed (`uv sync`, `npm install`)
- [x] AWS credentials configured (profile: `ai`)
- [x] Backend tested and working
- [x] Frontend tested and working
- [x] F5 launch configuration created
- [x] Everything runs successfully! 🎉
