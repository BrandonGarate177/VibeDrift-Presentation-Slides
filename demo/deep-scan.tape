# Real deep scan of the public VibeDrift repo, recorded with VHS.
# stdout goes to a file so the report doesn't scroll the score off-screen;
# stderr (the spinner) stays on the terminal. Then `head` shows the top.
# Re-rendering this spends one metered deep-scan credit.

Output "/Users/brandongarate/Documents/programming_projects/VibeDrift-ORG/presentation/demo/deep-scan.mp4"
Set Shell "zsh"
Set FontSize 20
Set Width 1400
Set Height 800
Set Padding 24
Set Theme "Catppuccin Mocha"
Set TypingSpeed 40ms

Type "cd /Users/brandongarate/Documents/programming_projects/VibeDrift-ORG/VibeDrift && clear"
Enter
Sleep 500ms
Type "vibedrift scan . --deep --format terminal > /tmp/deep.txt"
Enter
Sleep 150s
Type "clear && head -46 /tmp/deep.txt"
Enter
Sleep 10s
