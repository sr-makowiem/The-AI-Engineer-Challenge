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
- Use **Next.js** for the frontend (works best with Vercel deployment)
- Pay attention to visual clarity and contrast
- Ensure pleasant UX (boxes grow to fit contents, etc.)
- Use password-style text entry for sensitive information
- Must be testable locally before Vercel deployment
- Always provide instructions for running the UI

### Color Scheme & Theming
- Primary: Soft blues and greens (calming, supportive)
- Accent: Warm orange (#FF8C42)
- Background: Light gray (#F5F5F5)
- Text: Dark gray (#333333)
- Focus on accessibility and readability

### Backend
- Uses **Claude via AWS Bedrock** (not OpenAI)
- Model: `anthropic.claude-3-5-sonnet-20241022-v2:0` (or latest)
- FastAPI with CORS enabled for local development
- Environment variables in `.env` file

## Key Documentation

When building the frontend, reference:
- Next.js docs: https://nextjs.org/docs
- Vercel deployment: https://vercel.com/docs
- Claude API via Bedrock: https://docs.aws.amazon.com/bedrock/latest/userguide/

## Deployment

- Target platform: **Vercel**
- Backend runs as serverless function
- Use `vercel` CLI for deployment
