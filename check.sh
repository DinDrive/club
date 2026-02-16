#!/bin/bash
# Compare our $mol frontend structure with prod vas3k.club
# Usage: ./check.sh

TOKEN="u67Q6bYwMbasP7r5h88ElCPYpzmjTquG"
PROD="https://vas3k.club"
DEV="http://localhost:9080/club/app/-"

echo "=== CHECKING AUDIT ==="
AUDIT=$(curl -s "$DEV/web.audit.js" 2>&1)
if echo "$AUDIT" | grep -q "Audit passed"; then
    echo "✅ Audit passed"
else
    echo "❌ Audit FAILED:"
    echo "$AUDIT"
    exit 1
fi

echo ""
echo "=== CHECKING FEED PAGE ==="
FEED_HTML=$(curl -s -b "token=$TOKEN" "$PROD/" 2>&1)

# Check key structural elements exist on prod
echo "Prod feed page elements:"
echo "  Menu nav: $(echo "$FEED_HTML" | grep -c 'class="menu menu-full"') found"
echo "  Feed grid: $(echo "$FEED_HTML" | grep -c 'class="feed"') found"
echo "  Sidebar: $(echo "$FEED_HTML" | grep -c 'feed-sidebar') found"
echo "  Ordering: $(echo "$FEED_HTML" | grep -c 'feed-ordering') found"
echo "  Feed cards: $(echo "$FEED_HTML" | grep -c 'class="block feed-post') found"
echo "  Avatars: $(echo "$FEED_HTML" | grep -c 'feed-post-author') found"
echo "  Upvotes: $(echo "$FEED_HTML" | grep -c 'post-upvote') found"
echo "  Room badges: $(echo "$FEED_HTML" | grep -c 'feed-post-room') found"

# Check feed JSON works
echo ""
echo "=== CHECKING FEED JSON ==="
FEED_JSON=$(curl -s "$PROD/all/activity/feed.json" 2>&1)
ITEM_COUNT=$(echo "$FEED_JSON" | python3 -c "import sys,json; d=json.load(sys.stdin); print(len(d.get('items',[])))" 2>/dev/null)
echo "  Feed items: $ITEM_COUNT"
if [ "$ITEM_COUNT" -gt 0 ] 2>/dev/null; then
    echo "✅ Feed JSON works (public, no auth needed)"
else
    echo "⚠️  Feed JSON may need auth"
fi

echo ""
echo "=== CHECKING POST PAGE ==="
POST_HTML=$(curl -s -b "token=$TOKEN" "$PROD/question/30850/" 2>&1)
echo "Prod post page elements:"
echo "  Post block: $(echo "$POST_HTML" | grep -c 'post-layout-block') found"
echo "  Post title: $(echo "$POST_HTML" | grep -c 'post-title\|post-inline-title') found"
echo "  Post body: $(echo "$POST_HTML" | grep -c 'text-body') found"
echo "  Post footer: $(echo "$POST_HTML" | grep -c 'post-footer') found"
echo "  Comments: $(echo "$POST_HTML" | grep -c 'comment-layout-normal') found"
echo "  Upvote: $(echo "$POST_HTML" | grep -c 'post-upvote') found"

echo ""
echo "=== CHECKING PROFILE PAGE ==="
PROFILE_HTML=$(curl -s -b "token=$TOKEN" "$PROD/user/cmyserfast/" 2>&1)
echo "Prod profile page elements:"
echo "  Profile card: $(echo "$PROFILE_HTML" | grep -c 'profile-card') found"
echo "  Avatar: $(echo "$PROFILE_HTML" | grep -c 'profile-user-avatar') found"
echo "  Name: $(echo "$PROFILE_HTML" | grep -c 'profile-user-fullname') found"
echo "  Bio: $(echo "$PROFILE_HTML" | grep -c 'profile-user-bio') found"
echo "  Statuses: $(echo "$PROFILE_HTML" | grep -c 'profile-status') found"

echo ""
echo "=== CHECKING OUR CSS MATCHES PROD ==="
# Key CSS values from prod theme.css
echo "Prod CSS variables (light theme):"
echo "  --bg-color: #FCFDFF"
echo "  --text-color: #333"
echo "  --block-bg-color: #FFF"
echo "  --block-shadow: 10px 15px 40px rgba(83, 91, 110, 0.11)"
echo "  --block-border-radius: 15px"
echo "  --sans-font: Ubuntu, Helvetica, Verdana, sans-serif"
echo "  --max-content-width: 1000px"
echo "  Feed grid: 250px auto"
echo "  .feed-post min-height: 130px"
echo "  .feed-post margin-left: 30px"
echo "  .feed-post padding-left: 40px"
echo "  Avatar: 52x52, left: -26px, border: 3px"
echo "  Title font: 140%, weight 500"

echo ""
echo "Our CSS (from .css.ts files):"
grep -h "maxWidth\|font.*family\|gridTemplate\|minHeight\|margin.*left.*30\|padding.*left.*40\|width.*52\|left.*-26\|border.*radius.*15\|rgba.*83.*91.*110" \
    club/app/club.view.css.ts \
    club/card/card.view.css.ts \
    club/menu/menu.view.css.ts \
    2>/dev/null | sed 's/^/  /'

echo ""
echo "=== CHECKING DEV SERVER ==="
DEV_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$DEV/web.js" 2>&1)
if [ "$DEV_STATUS" = "200" ]; then
    echo "✅ Dev server running at $DEV"
else
    echo "❌ Dev server NOT running (status: $DEV_STATUS)"
fi

echo ""
echo "=== SUMMARY ==="
echo "Open http://localhost:9080/club/app/index.html to see our frontend"
echo "Compare with https://vas3k.club/ (logged in)"
