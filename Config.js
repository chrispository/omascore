.pragma library

// =============================================================================
// OmaScore user config — FAVORITE TEAMS AND LEAGUES ARE SET HERE.
// =============================================================================
//
// This is the only place favorites come from. The panel has no star buttons
// and nothing is stored in dconf; edit this file, then pull/reload the plugin
// (the shell hot-reloads it when the plugin folder changes, or run
// `omarchy-restart-shell`).
//
// What favorites do:
//   - The "★ Favorites" chip lists the next 5 games for these teams.
//   - Favorited teams sort to the top of each day's list and get a ★.
//   - The bar widget shows favorite scores, and score/final/kickoff
//     notifications fire only for these teams.
//
// favoriteTeams: league id -> list of ESPN team abbreviations (uppercase, as
// shown on the game cards, e.g. "WSH", "BOS", "NYR").
// League ids: nfl, cfb, nba, wnba, ncaam, ncaaw, mlb, nhl, mls, epl, laliga,
// bundes, seriea, ligue1, ucl (see `leagues` in Model.js).
var favoriteTeams = {
    nhl: ["WSH"]
}

// favoriteLeagues: league ids that sort first in the league chip row.
var favoriteLeagues = []

// Which league chips are visible is a separate setting ("visibleLeagues" in
// ~/.config/omarchy/shell.json, or Settings → Display → Visible leagues).
