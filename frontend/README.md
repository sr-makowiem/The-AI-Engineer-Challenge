# Mental Coach Chat - Frontend

A Next.js-based chat interface for your supportive AI mental coach, powered by Claude via AWS Bedrock.

## Features

- Clean, modern chat interface with real-time messaging
- Calming color scheme (soft blues, greens, and warm orange accent)
- Responsive design that works on all screen sizes
- Type-safe TypeScript implementation
- Tailwind CSS for styling

## Prerequisites

- Node.js 18.x or later (currently using v24.13.1)
- npm 9.x or later
- Backend API running on `http://localhost:8000`

## Setup

1. **Install dependencies**:

```bash
npm install
```

## Running the Application

1. **Start the backend server first**:

Make sure your FastAPI backend is running on port 8000:

```bash
cd /home/mmakowiecki/src/ai/The-AI-Engineer-Challenge
export AWS_PROFILE=ai
uv run uvicorn api.index:app --reload
```

2. **Start the frontend development server**:

In a new terminal:

```bash
cd /home/mmakowiecki/src/ai/The-AI-Engineer-Challenge/frontend
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start the development server (with hot reload)
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
frontend/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main chat page component
├── public/              # Static assets
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## Color Scheme

The application uses a calming color palette designed for a supportive mental coaching experience:

- **Primary Blue**: `#4A90E2` - Trust and calmness
- **Primary Green**: `#7CB342` - Growth and balance
- **Accent Orange**: `#FF8C42` - Warmth and energy
- **Background**: `#F5F5F5` - Soft, neutral background
- **Text**: `#333333` - Clear, readable text

## API Integration

The frontend connects to the FastAPI backend at `http://localhost:8000/api/chat`:

- **Endpoint**: `POST /api/chat`
- **Request Body**: `{ "message": "your message here" }`
- **Response**: `{ "reply": "Claude's response" }`

## Troubleshooting

### Backend Connection Error

If you see an error message in the chat about connecting to the backend:

1. Verify the backend is running: `curl http://localhost:8000/`
2. Check that your AWS profile is set: `echo $AWS_PROFILE` (should be "ai")
3. Restart the backend server if needed

### Port Already in Use

If port 3000 is already in use, Next.js will automatically try the next available port (3001, 3002, etc.)

You can also specify a different port:

```bash
npm run dev -- -p 3001
```

## Development Notes

- The application uses Next.js 15 App Router with React Server Components
- TypeScript is configured with strict mode for better type safety
- Tailwind CSS is configured with custom colors matching the design system
- Hot reload is enabled in development mode for a smooth development experience
