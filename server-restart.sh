#!/bin/bash

# PSP Designer Tools - Server Management Script
# Kill all servers and restart development server

echo "🔄 PSP Designer Tools Server Management"
echo "======================================="

# Kill all processes on common development ports
echo "🛑 Killing existing servers..."
killall -q browser-sync 2>/dev/null || true
killall -q concurrently 2>/dev/null || true
lsof -ti:3000 | xargs -r kill -9 2>/dev/null || true
lsof -ti:8000 | xargs -r kill -9 2>/dev/null || true
lsof -ti:5173 | xargs -r kill -9 2>/dev/null || true

echo "✅ All servers stopped"
echo ""

# Wait a moment for ports to be freed
sleep 2

# Navigate to project directory
cd /Users/Lh/Sites/Projects/psp-designertools

echo "🚀 Starting development server..."
echo "   - Tailwind CSS watch mode"
echo "   - Simple HTTP server on http://localhost:8000"
echo ""

# Start Tailwind CSS in watch mode in background
npm run watch &
TAILWIND_PID=$!

# Wait for initial build
sleep 3

# Start simple HTTP server
echo "🌐 Server running at: http://localhost:8000"
echo "📁 Serving: workfiles/ directory"
echo ""
echo "Press Ctrl+C to stop all servers"

# Change to workfiles directory and start simple HTTP server
cd workfiles
python3 -m http.server 8000

# Cleanup when script exits
trap "echo ''; echo '🛑 Stopping servers...'; kill $TAILWIND_PID 2>/dev/null || true; exit 0" INT TERM