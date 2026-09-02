# A real Claude Code session with the vibedrift MCP server registered.
# Clean env so nothing from the recording harness leaks into the session.
# The agent is asked for a helper the repo already has, and told to call
# validate_change before writing. Nothing is written to the repo.

Output "/Users/brandongarate/Documents/programming_projects/VibeDrift-ORG/presentation/demo/agent-session.mp4"
Set Shell "zsh"
Set FontSize 18
Set Width 1400
Set Height 800
Set Padding 24
Set Theme "Catppuccin Mocha"
Set TypingSpeed 25ms

Type "cd /Users/brandongarate/Documents/programming_projects/VibeDrift-ORG/VibeDrift && clear"
Enter
Sleep 500ms
Type "env -i HOME=$HOME PATH=$PATH TERM=xterm-256color LANG=en_US.UTF-8 claude --allowedTools 'mcp__vibedrift__validate_change,mcp__vibedrift__find_similar_function'"
Enter
Sleep 9s
Type "I need a helper in src/core/utils.ts that escapes a string for safe use inside a RegExp. Draft the function, then call the vibedrift validate_change tool with it before writing anything. Tell me exactly what the tool returned. Do not write or edit any files."
Enter
Sleep 90s
