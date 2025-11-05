// Script JS:
// ----------------------------------------------------->
const PHRASES = [
  // Romantic SMS--------> 01
  "You're the whisper in my soul's silent storm, eternal and wild 💖✨🌙",
  // Romantic SMS--------> 02
  "In your eyes, I find galaxies of unspoken promises, forever mine 🔥🥰💕",
  // Romantic SMS--------> 03
  "Your touch ignites the quiet fire that burns only for us, deep and true 💖🌹🎶",
  // Romantic SMS--------> 04
  "Every heartbeat echoes your name, a symphony of love unending 🏡💞⏰",
  // Romantic SMS--------> 05
  "You're the dream I never want to wake from, wrapped in starlight ✨💓🗺️",
  // Romantic SMS--------> 06
  "With you, time bends into moments of pure, breathless magic 🌟😘💖",
  // Romantic SMS--------> 07
  "Your smile is the sunrise that chases away my shadows forever 🥰🌙❤️",
  // Romantic SMS--------> 08
  "In the canvas of my heart, you're the masterpiece painted in gold 💕🎨🔥",
  // Romantic SMS--------> 09
  "You're my anchor in the wild sea of life, steady and profound 🏡💖🌹",
  // Romantic SMS--------> 10
  "Love with you feels like dancing on the edge of eternity, free and fierce 💞✨🎶",
  // Romantic SMS--------> 11
  "Your laughter is the melody that heals every hidden wound in me 😘💓🌟",
  // Romantic SMS--------> 12
  "We're two souls woven from the same cosmic thread, unbreakable 💖⏰🗺️",
  // Romantic SMS--------> 13
  "In your arms, I discover the universe's most sacred secret 🥰🔥💕",
  // Romantic SMS--------> 14
  "You're the poetry my heart writes in the quiet hours of night 🌙💞🎨",
  // Romantic SMS--------> 15
  "Every glance from you is a vow renewed, deeper than oceans 💖✨❤️",
  // Romantic SMS--------> 16
  "Your love is the light that guides me through the darkest dreams 🏡😘🌹",
  // Romantic SMS--------> 17
  "Together, we're a timeless tale etched in the stars above 🔥💓⏰",
  // Romantic SMS--------> 18
  "You're my forever horizon, where hope and passion collide 💕🌟🗺️",
  // Romantic SMS--------> 19
  "In the silence, your presence sings the song of our souls entwined 🎶💖🥰",
  // Romantic SMS--------> 20
  "Your essence is the spark that sets my world ablaze with wonder ✨💞🌙",
  // Romantic SMS--------> 21
  "We're the echo of a love that defies the boundaries of time 💓🔥🎨",
  // Romantic SMS--------> 22
  "Your voice is the gentle wave that soothes my restless spirit 🏡💖😘",
  // Romantic SMS--------> 23
  "In you, I find the missing verse to my life's unfinished poem 💕⏰🌟",
  // Romantic SMS--------> 24
  "You're the flame that warms the coldest corners of my being 🔥💞❤️",
  // Romantic SMS--------> 25
  "Every breath with you is a chapter in our endless love story 🗺️✨💓",
  // Romantic SMS--------> 26
  "Your heart is the compass that leads me home, always and true 🏡🥰🎶",
  // Romantic SMS--------> 27
  "We're stardust lovers, born to illuminate each other's nights 🌙💖🌹",
  // Romantic SMS--------> 28
  "In your gaze, I see the reflection of a love pure and infinite 💕😘🔥",
  // Romantic SMS--------> 29
  "You're my sanctuary in the chaos, a peace beyond words 💞⏰🗺️",
  // Romantic SMS--------> 30
  "Love blooms in us like a eternal garden under moonlit skies ✨💓🌟",
  // Romantic SMS--------> 31
  "Your soul dances with mine in rhythms only we understand 🎶💖🥰",
  // Romantic SMS--------> 32
  "Together, we paint the sky with colors of unspoken devotion 🏡🔥💕",
  // Romantic SMS--------> 33
  "You're the whisper of destiny calling me to your side forever 🌹✨❤️",
  // Romantic SMS--------> 34
  "In every sunset, I see the promise of our dawn anew 💓😘⏰",
  // Romantic SMS--------> 35
  "Your love is the river that carves canyons in my heart's stone 🗺️💞🎨",
  // Romantic SMS--------> 36
  "We're echoes of ancient lovers, reborn in this moment's grace 🔥💖🌙",
  // Romantic SMS--------> 37
  "Your touch rewrites the stars, making our story the brightest 💕🥰🌟",
  // Romantic SMS--------> 38
  "In the quiet, your name is the prayer that steadies my soul 🏡💓✨",
  // Romantic SMS--------> 39
  "You're my wild adventure wrapped in the safety of true love 🎶😘💖",
  // Romantic SMS--------> 40
  "Every moment with you is a verse in the ballad of us eternal ⏰🔥🗺️",
  // Romantic SMS--------> 41
  "Your eyes hold the secrets of a love that time can't erase 💞🌹❤️",
  // Romantic SMS--------> 42
  "We're the harmony in a world of discord, perfectly attuned 💓✨🎶",
  // Romantic SMS--------> 43
  "In you, I find the courage to chase dreams hand in hand 🥰💖🏡",
  // Romantic SMS--------> 44
  "Your love is the anchor that frees me to soar unbound 🔥💕🌟",
  // Romantic SMS--------> 45
  "Together, we're the spark that ignites forgotten constellations 🌙😘⏰",
  // Romantic SMS--------> 46
  "You're the melody that lingers in my heart's quiet chambers 💞🎨🗺️",
  // Romantic SMS--------> 47
  "Every kiss is a seal on our pact of forever devotion 💖✨💓",
  // Romantic SMS--------> 48
  "Your presence turns ordinary days into sacred celebrations 🏡🥰🌹",
  // Romantic SMS--------> 49
  "We're woven from threads of fate, unbreakable and divine 🔥💕❤️",
  // Romantic SMS--------> 50
  "In your laughter, I hear the future we build with love 🌟😘🎶",
  // Romantic SMS--------> 51
  "Your soul is the mirror to my deepest, truest self 💞⏰🗺️",
  // Romantic SMS--------> 52
  "Love with you is the art of breathing in sync, eternally ✨💖🏡",
  // Romantic SMS--------> 53
  "You're my north star in the voyage of life's vast ocean 🌙🔥💓",
  // Romantic SMS--------> 54
  "Every whisper from you builds bridges to my hidden dreams 💕🥰🌟",
  // Romantic SMS--------> 55
  "We're the poem written in the language of stolen glances 🎨😘💖",
  // Romantic SMS--------> 56
  "Your heartbeats sync with mine, a rhythm of pure bliss ⏰💞🗺️",
  // Romantic SMS--------> 57
  "In the garden of us, every flower blooms with your name 🌹✨❤️",
  // Romantic SMS--------> 58
  "You're the quiet strength that lifts me to impossible heights 🏡💓🎶",
  // Romantic SMS--------> 59
  "Together, we defy gravity, floating in love's embrace 🔥🥰💕",
  // Romantic SMS--------> 60
  "Your love is the canvas where my colors come alive 💖🌟😘",
  // Romantic SMS--------> 61
  "We're timeless travelers on the road of shared secrets 🗺️💞⏰",
  // Romantic SMS--------> 62
  "In your arms, I unravel the mysteries of being whole ✨💓🏡",
  // Romantic SMS--------> 63
  "You're the spark that turns my silence into symphonies 🎶🔥🌙",
  // Romantic SMS--------> 64
  "Every dawn with you renews the vow of our wild hearts 💕🥰🌹",
  // Romantic SMS--------> 65
  "Your gaze is the key to the locked chambers of my soul 💖😘💓",
  // Romantic SMS--------> 66
  "We're the echo of waves crashing into eternal shorelines 🌟✨🗺️",
  // Romantic SMS--------> 67
  "Love grows in us like vines reaching for your light 🏡💞🎨",
  // Romantic SMS--------> 68
  "You're my forever echo in the canyon of time ⏰🔥❤️",
  // Romantic SMS--------> 69
  "In every breath, I taste the sweetness of our bond 💓🥰🌙",
  // Romantic SMS--------> 70
  "Your touch is the brushstroke that perfects my portrait 💖🌹😘",
  // Romantic SMS--------> 71
  "Together, we're the constellation that guides lost lovers ✨💕🎶",
  // Romantic SMS--------> 72
  "You're the verse that completes my unfinished song 🏡💞⏰",
  // Romantic SMS--------> 73
  "Every moment is a petal falling from our love's rose 🌟🔥💓",
  // Romantic SMS--------> 74
  "Your soul calls to mine across the vastness of nights 🗺️😘💖",
  // Romantic SMS--------> 75
  "We're the flame and the moth, drawn in divine surrender 💕✨🥰",
  // Romantic SMS--------> 76
  "In you, I find the peace of a thousand sunrises 🎨💓🌙",
  // Romantic SMS--------> 77
  "Your love is the wind that carries my dreams to you 🏡🔥❤️",
  // Romantic SMS--------> 78
  "You're my hidden treasure in life's endless quest 💞🌟⏰",
  // Romantic SMS--------> 79
  "Together, we weave tapestries of joy from simple threads 💖😘🗺️",
  // Romantic SMS--------> 80
  "Every heartbeat is a love letter written just for you ✨💕🎶",
  // Romantic SMS--------> 81
  "Your presence is the melody that soothes my storms 🏡🥰💓",
  // Romantic SMS--------> 82
  "We're eternal dancers in the ballroom of fate 🔥🌹🌟",
  // Romantic SMS--------> 83
  "In your eyes, I see the blueprint of our paradise 💖⏰😘",
  // Romantic SMS--------> 84
  "You're the root that grounds my wandering spirit deep 💞✨🏡",
  // Romantic SMS--------> 85
  "Love with you is the art of turning whispers into worlds 🎨💓🗺️",
  // Romantic SMS--------> 86
  "Your laughter unlocks doors I never knew were sealed 🌙🔥🥰",
  // Romantic SMS--------> 87
  "Together, we're the spark in the velvet dark of night 💕💖🌟",
  // Romantic SMS--------> 88
  "You're my compass rose, pointing to true north always ⏰😘❤️",
  // Romantic SMS--------> 89
  "Every touch etches your name deeper into my being ✨💞🎶",
  // Romantic SMS--------> 90
  "In the silence between us, love speaks the loudest 🏡🌹💓",
  // Romantic SMS--------> 91
  "Your soul is the haven where my wild heart rests 🗺️🔥🥰",
  // Romantic SMS--------> 92
  "We're the tide and the moon, forever pulling close 💖✨⏰",
  // Romantic SMS--------> 93
  "Love blooms eternal in the garden of your gaze 🌟💕😘",
  // Romantic SMS--------> 94
  "You're the chapter I reread in the book of my life 🎨💓🏡",
  // Romantic SMS--------> 95
  "Together, we chase horizons painted in passion's hue 🔥💞🌙",
  // Romantic SMS--------> 96
  "Your voice is the lullaby that tames my restless dreams 💖🥰🗺️",
  // Romantic SMS--------> 97
  "In you, I discover the infinite shades of belonging ✨💓🌹",
  // Romantic SMS--------> 98
  "You're my eternal flame in the hearth of my heart ⏰🔥❤️",
  // Romantic SMS--------> 99
  "Every glance is a bridge across the river of time 💕😘🎶",
  // Romantic SMS--------> 100
  "We're souls entwined in the dance of destiny's grace 🏡💖🌟",
  // Romantic SMS--------> 101
  "You light up my shadows with your gentle glow 💖✨🌙",
  // Romantic SMS--------> 102
  "My heart beats in rhythm with yours alone 🔥🥰💕",
  // Romantic SMS--------> 103
  "You're the dream I hold close through every night 💞🎶🏡",
  // Romantic SMS--------> 104
  "With you, love feels like home in every step 🗺️💓⏰",
  // Romantic SMS--------> 105
  "Your smile is my favorite sunrise every day 🌟😘💖",
  // Romantic SMS--------> 106
  "I cherish the way you make my world complete ✨💕🔥",
  // Romantic SMS--------> 107
  "You're my forever, in whispers and in storms 🏡🥰🌹",
  // Romantic SMS--------> 108
  "Love with you is a melody I never tire of 🎨💞❤️",
  // Romantic SMS--------> 109
  "Your touch lingers like stars in the dawn sky ⏰💓🌙",
  // Romantic SMS--------> 110
  "We build castles of dreams, hand in tender hand 💖🗺️😘",
  // Romantic SMS--------> 111
  "You're the spark that warms my coldest days 🔥💕🌟",
  // Romantic SMS--------> 112
  "In your arms, I find peace beyond words 🏡✨💓",
  // Romantic SMS--------> 113
  "My soul sings your name in silent reverie 🎶🥰⏰",
  // Romantic SMS--------> 114
  "You're my anchor, steady in life's wild waves 💞🌹🗺️",
  // Romantic SMS--------> 115
  "Every moment with you is a gift unwrapped 💖😘❤️",
  // Romantic SMS--------> 116
  "Your love paints my days in hues of joy ✨🔥🏡",
  // Romantic SMS--------> 117
  "We dance through time, lost in each other's eyes 🌙💓🎨",
  // Romantic SMS--------> 118
  "You're the whisper that calms my racing heart 💕🥰🌟",
  // Romantic SMS--------> 119
  "I adore how you make ordinary magical ⏰💖🗺️",
  // Romantic SMS--------> 120
  "Your essence is the light in my endless night 😘💞✨",
  // Romantic SMS--------> 121
  "Together, we're unbreakable threads of fate 🏡🔥💓",
  // Romantic SMS--------> 122
  "You're my muse, inspiring every beat 🎶🌹❤️",
  // Romantic SMS--------> 123
  "Love grows wild in the garden of us 💖🥰⏰",
  // Romantic SMS--------> 124
  "Your gaze holds the stars I chase at dawn 🌟✨🗺️",
  // Romantic SMS--------> 125
  "I miss the way your heart calls to mine 💕😘🏡",
  // Romantic SMS--------> 126
  "You're the flame that never fades in me 🔥💞🌙",
  // Romantic SMS--------> 127
  "With you, every path leads to paradise 🎨💓💖",
  // Romantic SMS--------> 128
  "Your laughter is my favorite echo 🥰⏰🌹",
  // Romantic SMS--------> 129
  "We weave dreams from the silk of our love ✨🗺️❤️",
  // Romantic SMS--------> 130
  "You're my safe harbor in every storm 💖😘🔥",
  // Romantic SMS--------> 131
  "I crave the quiet moments tangled with you 🏡💕🌟",
  // Romantic SMS--------> 132
  "Your soul mirrors the beauty in mine 🎶🥰⏰",
  // Romantic SMS--------> 133
  "Love with you is timeless and true 💞✨💓",
  // Romantic SMS--------> 134
  "You're the verse that rhymes with my heart 🌙🔥🗺️",
  // Romantic SMS--------> 135
  "Every kiss seals our eternal bond 💖😘🏡",
  // Romantic SMS--------> 136
  "Your presence is my greatest treasure 💕🎨🌹",
  // Romantic SMS--------> 137
  "We soar together on wings of passion 🥰💓⏰",
  // Romantic SMS--------> 138
  "You're the light that chases my doubts away ✨💖🌟",
  // Romantic SMS--------> 139
  "I cherish our shared silences deeply 🗺️🔥❤️",
  // Romantic SMS--------> 140
  "Your love is the rhythm of my days 🎶💞😘",
  // Romantic SMS--------> 141
  "Together, we conquer the unknown hand in hand 💖🏡⏰",
  // Romantic SMS--------> 142
  "You're my wild heart's gentle home 🌙🥰💕",
  // Romantic SMS--------> 143
  "Every glance reignites our spark ✨💓🌹",
  // Romantic SMS--------> 144
  "I adore the world you see in me 🎨😘🗺️",
  // Romantic SMS--------> 145
  "Your touch is poetry on my skin 💞🔥💖",
  // Romantic SMS--------> 146
  "We're stars aligned in perfect harmony 🌟⏰🏡",
  // Romantic SMS--------> 147
  "Love whispers your name in my dreams 💕🥰✨",
  // Romantic SMS--------> 148
  "You're the calm in my beautiful chaos 💓🌙🎶",
  // Romantic SMS--------> 149
  "I need your heart like air in bloom 🗺️💖😘",
  // Romantic SMS--------> 150
  "Your smile unlocks my hidden joys ❤️🔥🥰",
  // Romantic SMS--------> 151
  "Together, we're a symphony of souls 💞⏰🌟",
  // Romantic SMS--------> 152
  "You're my eternal sunrise every dawn ✨💓🏡",
  // Romantic SMS--------> 153
  "Every breath carries your scent to me 🌹😘💖",
  // Romantic SMS--------> 154
  "I treasure the fire you ignite in us 🎨🔥🗺️",
  // Romantic SMS--------> 155
  "Your love is my compass through nights 💕⏰💓",
  // Romantic SMS--------> 156
  "We bloom like flowers in spring's embrace 🥰✨🌙",
  // Romantic SMS--------> 157
  "You're the dream woven into my reality 💖🏡🎶",
  // Romantic SMS--------> 158
  "In your eyes, I find my forever home 😘💞🌟",
  // Romantic SMS--------> 159
  "Love with you is a timeless adventure 🗺️🔥❤️",
  // Romantic SMS--------> 160
  "Your heart beats the song of our unity 💓⏰✨",
  // Romantic SMS--------> 161
  "We're the spark in each other's story 💖🥰🎨",
  // Romantic SMS--------> 162
  "I crave the warmth of your nearness 🌹💕😘",
  // Romantic SMS--------> 163
  "You're my anchor in passion's sea 🏡🔥💓",
  // Romantic SMS--------> 164
  "Every word from you heals my soul ✨⏰🌙",
  // Romantic SMS--------> 165
  "Together, we chase the moon's soft glow 💞🌟🗺️",
  // Romantic SMS--------> 166
  "Your touch is the magic I seek 💖😘🏡",
  // Romantic SMS--------> 167
  "Love grows deeper with every glance 🎶🥰💕",
  // Romantic SMS--------> 168
  "You're the light in my shadowed paths 💓✨🔥",
  // Romantic SMS--------> 169
  "I adore our shared dreams at dusk 🌙⏰❤️",
  // Romantic SMS--------> 170
  "We're eternal flames dancing free 💖🗺️🎨",
  // Romantic SMS--------> 171
  "Your soul calls mine home every time 💞😘🌟",
  // Romantic SMS--------> 172
  "In you, I find endless wonder 🏡🔥💓",
  // Romantic SMS--------> 173
  "Every kiss is a promise renewed ✨🥰⏰",
  // Romantic SMS--------> 174
  "You're my heart's quiet revolution 💕💖🌹",
  // Romantic SMS--------> 175
  "Love with you feels like flying 🎶😘🗺️",
  // Romantic SMS--------> 176
  "We build bridges of trust and fire 💓🏡🔥",
  // Romantic SMS--------> 177
  "Your laughter echoes in my core 🌟✨💕",
  // Romantic SMS--------> 178
  "I need you like stars need the night ⏰🥰💖",
  // Romantic SMS--------> 179
  "Together, we're unbreakable magic 💞🎨🌙",
  // Romantic SMS--------> 180
  "You're the verse in my love's poem 😘💓🗺️",
  // Romantic SMS--------> 181
  "Every moment is ours to cherish 💖🔥🏡",
  // Romantic SMS--------> 182
  "Your love is my guiding constellation 🌟⏰❤️",
  // Romantic SMS--------> 183
  "We dance in the rain of our joy ✨🥰💕",
  // Romantic SMS--------> 184
  "You're my forever whispered wish 💓🌹🎶",
  // Romantic SMS--------> 185
  "In your arms, time stands still 🗺️😘💖",
  // Romantic SMS--------> 186
  "Love blooms where your heart meets mine 💞🏡✨",
  // Romantic SMS--------> 187
  "You're the spark of my every dawn 🔥⏰🌟",
  // Romantic SMS--------> 188
  "I treasure our silent understandings 💕🥰🎨",
  // Romantic SMS--------> 189
  "We're souls painted in the same hue 💖🌙💓",
  // Romantic SMS--------> 190
  "Your touch awakens my deepest peace 😘🔥🗺️",
  // Romantic SMS--------> 191
  "Every day with you is a new love letter ✨💞🏡",
  // Romantic SMS--------> 192
  "You're my wild, tender eternity ⏰😘🌹",
  // Romantic SMS--------> 193
  "Love with you is pure, uncharted bliss 💓🎶💖",
  // Romantic SMS--------> 194
  "We light up the dark with our bond 🌟🥰🔥",
  // Romantic SMS--------> 195
  "Your heart is my favorite refuge 💕✨⏰",
  // Romantic SMS--------> 196
  "Together, we're the stuff of legends 🗺️💞🌙",
  // Romantic SMS--------> 197
  "I crave your soul's gentle fire 💖😘🏡",
  // Romantic SMS--------> 198
  "You're the melody in my chaos 🎨💓❤️",
  // Romantic SMS--------> 199
  "Every glance deepens our sacred tie ✨🔥🥰",
  // Romantic SMS--------> 200
  "Love whispers eternity in your eyes 💕⏰🌟",
  // Romantic SMS--------> 201
  "You're my heart's unspoken vow 💖🌹🎶",
  // Romantic SMS--------> 202
  "We chase sunsets wrapped in each other 🏡😘✨",
  // Romantic SMS--------> 203
  "Your love is the air I breathe free 🔥💞⏰",
  // Romantic SMS--------> 204
  "In you, I find my wild serenity 💓🥰🗺️",
  // Romantic SMS--------> 205
  "You're the dream that colors my reality 🌙💖🌟",
  // Romantic SMS--------> 206
  "Every touch is a spark of forever 💕😘🎨",
  // Romantic SMS--------> 207
  "Together, we defy the fade of time 🏡🔥💓",
  // Romantic SMS--------> 208
  "Your soul is my compass of joy ✨⏰❤️",
  // Romantic SMS--------> 209
  "Love with you is a gentle storm 💞🥰🌹",
  // Romantic SMS--------> 210
  "You're my anchor in love's vast sea 💖🗺️🎶",
  // Romantic SMS--------> 211
  "I adore the way you steal my breath 😘✨💕",
  // Romantic SMS--------> 212
  "We bloom under the moon's tender watch 🌟🔥🏡",
  // Romantic SMS--------> 213
  "Your heart echoes mine in perfect sync ⏰💓🌙",
  // Romantic SMS--------> 214
  "Every kiss carves our names in stars 💖🥰🗺️",
  // Romantic SMS--------> 215
  "You're the light that heals my scars 🎨💞😘",
  // Romantic SMS--------> 216
  "Love grows roots in our shared silence 💕✨🔥",
  // Romantic SMS--------> 217
  "Together, we're a timeless embrace 🏡⏰🌟",
  // Romantic SMS--------> 218
  "Your gaze is my favorite escape 💓🌹💖",
  // Romantic SMS--------> 219
  "I need your fire to feel alive 🎶😘🥰",
  // Romantic SMS--------> 220
  "You're my soul's quiet revolution ✨💕🗺️",
  // Romantic SMS--------> 221
  "Every moment etches you deeper in me 🔥🏡💓",
  // Romantic SMS--------> 222
  "Love with you is poetry in motion 💞⏰🌙",
  // Romantic SMS--------> 223
  "We dance through life's sweet mysteries 💖🎨❤️",
  // Romantic SMS--------> 224
  "Your love is the warmth I seek 🥰✨🌟",
  // Romantic SMS--------> 225
  "You're the verse that mends my heart 😘💓🗺️",
  // Romantic SMS--------> 226
  "In your arms, I am endlessly home 💕🔥🏡",
  // Romantic SMS--------> 227
  "Together, we paint nights with stars ⏰💖🌙",
  // Romantic SMS--------> 228
  "Your touch is my sacred ritual ✨🥰🎶",
  // Romantic SMS--------> 229
  "Love blooms fierce in our union 💞🌹💓",
  // Romantic SMS--------> 230
  "You're my wild heart's gentle call 🗺️😘🔥",
  // Romantic SMS--------> 231
  "Every whisper binds us closer 💖⏰🌟",
  // Romantic SMS--------> 232
  "I cherish the fire in your soul 🏡💕✨",
  // Romantic SMS--------> 233
  "We're eternal lovers under one sky 🎨🥰❤️",
  // Romantic SMS--------> 234
  "Your eyes hold my unspoken dreams 💓🌙🗺️",
  // Romantic SMS--------> 235
  "Love with you is a boundless sea 💖😘⏰",
  // Romantic SMS--------> 236
  "Together, we ignite the quiet night 🔥💞🌟",
  // Romantic SMS--------> 237
  "You're the melody that lingers on ✨💓🏡",
  // Romantic SMS--------> 238
  "Every heartbeat sings your praise 🎶🥰💕",
  // Romantic SMS--------> 239
  "I adore our tangled, tender paths 🗺️🔥🌹",
  // Romantic SMS--------> 240
  "Your love is my anchor and wings 💖⏰😘",
  // Romantic SMS--------> 241
  "We weave magic from simple joys 💞✨🎨",
  // Romantic SMS--------> 242
  "You're my forever in fleeting moments 🏡💓🌙",
  // Romantic SMS--------> 243
  "Love whispers through our every glance 💕🥰🌟",
  // Romantic SMS--------> 244
  "In you, I find my truest self 🔥😘💖",
  // Romantic SMS--------> 245
  "Together, we're the spark of dawn ⏰🗺️✨",
  // Romantic SMS--------> 246
  "Your soul is the home I seek 💓🏡🎶",
  // Romantic SMS--------> 247
  "Every kiss is a vow renewed 💞🌹❤️",
  // Romantic SMS--------> 248
  "You're the light in my wandering night 🌟🥰💕",
  // Romantic SMS--------> 249
  "Love grows wild with you by my side 💖😘🔥",
  // Romantic SMS--------> 250
  "We chase dreams hand in woven hands 🗺️✨⏰",
  // Romantic SMS--------> 251
  "Your heart is my favorite song 🎨💓🌙",
  // Romantic SMS--------> 252
  "I crave the peace only you bring 💕🏡🥰",
  // Romantic SMS--------> 253
  "You're my eternal, gentle storm 💖🔥🌟",
  // Romantic SMS--------> 254
  "Together, we bloom in love's garden 😘💞🎶",
  // Romantic SMS--------> 255
  "Every touch awakens my soul ✨⏰🗺️",
  // Romantic SMS--------> 256
  "Your love is the fire I warm to 💓🌹💖",
  // Romantic SMS--------> 257
  "We dance in the glow of our bond 🏡🥰🔥",
  // Romantic SMS--------> 258
  "You're the whisper of my destiny 💕✨🎨",
  // Romantic SMS--------> 259
  "Love with you is pure enchantment 🌙😘⏰",
  // Romantic SMS--------> 260
  "I adore how you complete my silence 💞💓🌟",
  // Romantic SMS--------> 261
  "Together, we're stars in human form 💖🗺️❤️",
  // Romantic SMS--------> 262
  "Your gaze ignites my inner world 🔥🏡🎶",
  // Romantic SMS--------> 263
  "Every moment is etched with you ✨🥰💕",
  // Romantic SMS--------> 264
  "You're my heart's unspoken truth 💓⏰🌹",
  // Romantic SMS--------> 265
  "Love flows like rivers to your sea 💖😘🗺️",
  // Romantic SMS--------> 266
  "We build empires of tender trust 🎨🔥🌙",
  // Romantic SMS--------> 267
  "Your soul calls across the miles 💞✨🏡",
  // Romantic SMS--------> 268
  "I need your light in my shadows ⏰🥰💓",
  // Romantic SMS--------> 269
  "You're the dream I live awake 🌟💖🎶",
  // Romantic SMS--------> 270
  "Together, we conquer quiet fears 💕😘🔥",
  // Romantic SMS--------> 271
  "Your love is my sacred ground 🗺️✨💞",
  // Romantic SMS--------> 272
  "Every breath honors our connection 🏡⏰🌹",
  // Romantic SMS--------> 273
  "We soar on wings of shared hope 💓🥰🌟",
  // Romantic SMS--------> 274
  "You're my wild, whispered prayer 💖🎨❤️",
  // Romantic SMS--------> 275
  "Love with you defies all bounds 😘🔥⏰",
  // Romantic SMS--------> 276
  "I cherish the spark in your eyes ✨💕🌙",
  // Romantic SMS--------> 277
  "Together, we're a love unbound 🗺️💓🏡",
  // Romantic SMS--------> 278
  "Your heart is my compass rose 🎶🥰💖",
  // Romantic SMS--------> 279
  "Every kiss blooms our story 🌹✨⏰",
  // Romantic SMS--------> 280
  "You're the calm to my fervent sea 💞🔥🌟",
  // Romantic SMS--------> 281
  "Love grows in the spaces between us 💖😘🗺️",
  // Romantic SMS--------> 282
  "We light paths with our gentle fire 🏡💓🎨",
  // Romantic SMS--------> 283
  "Your touch is my favorite verse ⏰🥰❤️",
  // Romantic SMS--------> 284
  "I adore our eternal now ✨💕🌙",
  // Romantic SMS--------> 285
  "You're my soul's quiet symphony 💞🎶💖",
  // Romantic SMS--------> 286
  "Together, we chase the horizon's edge 🔥😘🌟",
  // Romantic SMS--------> 287
  "Every glance is a love reborn 🗺️✨🏡",
  // Romantic SMS--------> 288
  "Your love anchors my wandering dreams 💓⏰🌹",
  // Romantic SMS--------> 289
  "We weave nights into golden threads 💖🥰🎨",
  // Romantic SMS--------> 290
  "You're the flame that calls me home 🔥💕🗺️",
  // Romantic SMS--------> 291
  "Love with you is a sacred art ✨😘⏰",
  // Romantic SMS--------> 292
  "I need your heart's steady beat 💞🏡🌟",
  // Romantic SMS--------> 293
  "Together, we're timeless wanderers 💓🎶❤️",
  // Romantic SMS--------> 294
  "Your soul is my endless horizon 🌙🔥🥰",
  // Romantic SMS--------> 295
  "Every moment sings of us 💖✨🗺️",
  // Romantic SMS--------> 296
  "You're my gentle revolution 💕⏰😘",
  // Romantic SMS--------> 297
  "Love blooms in your tender gaze 🏡💓🌹",
  // Romantic SMS--------> 298
  "We dance through the veil of stars 🎨🥰🔥",
  // Romantic SMS--------> 299
  "Your touch heals what words can't 💞✨🌟",
  // Romantic SMS--------> 300
  "I cherish our unspoken vows 💖⏰🏡",
  // Romantic SMS--------> 301
  "You're the light weaving my days 🎶😘💓",
  // Romantic SMS--------> 302
  "Together, we defy fleeting time 🗺️🔥❤️",
  // Romantic SMS--------> 303
  "Your heart is my wild sanctuary 💕🌙⏰",
  // Romantic SMS--------> 304
  "Love with you is pure alchemy ✨🥰💖",
  // Romantic SMS--------> 305
  "We build dreams from whispered hopes 💞🎨🌟",
  // Romantic SMS--------> 306
  "You're my forever hidden gem 😘🏡💓",
  // Romantic SMS--------> 307
  "Every kiss is a star fallen 🔥✨🗺️",
  // Romantic SMS--------> 308
  "I adore the peace you bring me 💖⏰🌹",
  // Romantic SMS--------> 309
  "Together, we're the dawn's first breath 🥰💕🌙",
  // Romantic SMS--------> 310
  "Your soul mirrors my deepest joy 🎶🔥💞",
  // Romantic SMS--------> 311
  "Love grows like vines around us 💓😘🏡",
  // Romantic SMS--------> 312
  "You're the melody in my storm ✨⏰🌟",
  // Romantic SMS--------> 313
  "We chase sunrises hand in hand 🗺️🥰💖",
  // Romantic SMS--------> 314
  "Your love is my eternal spring 🌹💕🎨",
  // Romantic SMS--------> 315
  "Every glance binds our fates tighter 🔥✨⏰",
  // Romantic SMS--------> 316
  "I need your warmth like dawn's light 💞🏡❤️",
  // Romantic SMS--------> 317
  "Together, we paint the unseen skies 💓🌙🎶",
  // Romantic SMS--------> 318
  "You're my heart's quiet anchor 😘💖🗺️",
  // Romantic SMS--------> 319
  "Love whispers through our shared breaths ✨🥰💕",
  // Romantic SMS--------> 320
  "We bloom in the garden of trust 🌟🔥🏡",
  // Romantic SMS--------> 321
  "Your touch is the song I crave 💞⏰🌹",
  // Romantic SMS--------> 322
  "Every moment is our love's canvas 🎨😘💓",
  // Romantic SMS--------> 323
  "You're the spark that lights my path 💖✨🗺️",
  // Romantic SMS--------> 324
  "I cherish how you hold my dreams 🏡🥰🔥",
  // Romantic SMS--------> 325
  "Together, we're unbreakable whispers 💕⏰🌙",
  // Romantic SMS--------> 326
  "Your soul is my favorite refuge 🎶💞🌟",
  // Romantic SMS--------> 327
  "Love with you is a gentle wildfire 💓😘❤️",
  // Romantic SMS--------> 328
  "We dance in the rhythm of fate 🗺️✨💖",
  // Romantic SMS--------> 329
  "You're my wild heart's calm sea 🏡🔥⏰",
  // Romantic SMS--------> 330
  "Every kiss etches eternity 🌹🥰💕",
  // Romantic SMS--------> 331
  "I adore our tangled souls 🎨💓🌙",
  // Romantic SMS--------> 332
  "Together, we conquer silent nights ✨💖🗺️",
  // Romantic SMS--------> 333
  "Your love is the root of my joy 💞😘🏡",
  // Romantic SMS--------> 334
  "We weave stars from our laughter 🔥⏰🌟",
  // Romantic SMS--------> 335
  "You're the dream I breathe daily 💕🎶🥰",
  // Romantic SMS--------> 336
  "Love grows in your tender hold 💓✨🌹",
  // Romantic SMS--------> 337
  "Every glance is a love reborn 🗺️💖🔥",
  // Romantic SMS--------> 338
  "I need your light to shine true 🏡😘⏰",
  // Romantic SMS--------> 339
  "Together, we're the moon's secret 💞🌙💓",
  // Romantic SMS--------> 340
  "Your heart calls across the winds 🎨🥰🌟",
  // Romantic SMS--------> 341
  "Love with you is endless bloom ✨💕🗺️",
  // Romantic SMS--------> 342
  "We chase the horizon's embrace 💖🔥🏡",
  // Romantic SMS--------> 343
  "You're my soul's sweet symphony 😘⏰🎶",
  // Romantic SMS--------> 344
  "Every touch awakens paradise 💓🌹💞",
  // Romantic SMS--------> 345
  "I cherish the fire we share 🗺️✨🥰",
  // Romantic SMS--------> 346
  "Together, we light the unseen paths 🔥💖🌟",
  // Romantic SMS--------> 347
  "Your love is my quiet strength 🏡⏰❤️",
  // Romantic SMS--------> 348
  "We dance through dreams uncharted 🎨😘💕",
  // Romantic SMS--------> 349
  "You're the verse in my heart's book 💞🌙⏰",
  // Romantic SMS--------> 350
  "Love whispers your name eternally 💓✨🗺️",
  // Romantic SMS--------> 351
  "Every moment is ours to savor 💖🥰🏡",
  // Romantic SMS--------> 352
  "I adore how you steal my soul 🔥🌟🎶",
  // Romantic SMS--------> 353
  "Together, we're timeless flames 💕😘🔥",
  // Romantic SMS--------> 354
  "Your gaze is my forever dawn 🌹⏰💓",
  // Romantic SMS--------> 355
  "We build worlds from tender words 🗺️✨🏡",
  // Romantic SMS--------> 356
  "You're my wild, sacred peace 💞🎨🥰",
  // Romantic SMS--------> 357
  "Love with you is a river's flow 💖🌙💕",
  // Romantic SMS--------> 358
  "Every kiss seals our wild hearts 😘🔥⏰",
  // Romantic SMS--------> 359
  "I need your essence like rain 🌟💓🗺️",
  // Romantic SMS--------> 360
  "Together, we bloom under stars 🏡✨🎶",
  // Romantic SMS--------> 361
  "Your soul is my endless song 💞🥰🌹",
  // Romantic SMS--------> 362
  "Love grows fierce in our silence 💖⏰❤️",
  // Romantic SMS--------> 363
  "We chase the light of our bond 🔥😘🌟",
  // Romantic SMS--------> 364
  "You're the dream that holds me close 🎨💕🏡",
  // Romantic SMS--------> 365
  "Every glance ignites my core ✨💓🗺️",
  // Romantic SMS--------> 366
  "I cherish your heart's quiet beat ⏰🥰💖",
  // Romantic SMS--------> 367
  "Together, we're the night’s embrace 🌙🔥💞",
  // Romantic SMS--------> 368
  "Your love is my guiding whisper 💕😘🎨",
  // Romantic SMS--------> 369
  "We weave joy from fleeting touches 🗺️✨⏰",
  // Romantic SMS--------> 370
  "You're my eternal, soft revolution 💓🏡🌟",
  // Romantic SMS--------> 371
  "Love with you is pure, wild grace 💖🥰❤️",
  // Romantic SMS--------> 372
  "Every moment echoes your name 🎶😘🔥",
  // Romantic SMS--------> 373
  "I adore the way we entwine 🌹💕🗺️",
  // Romantic SMS--------> 374
  "Together, we defy the fade ✨⏰🏡",
  // Romantic SMS--------> 375
  "Your soul lights my hidden paths 💞🌙💓",
  // Romantic SMS--------> 376
  "We dance in love's gentle current 🎨🔥🥰",
  // Romantic SMS--------> 377
  "You're the spark of my serenity 💖✨🌟",
  // Romantic SMS--------> 378
  "Love blooms where our hearts meet ⏰😘💕",
  // Romantic SMS--------> 379
  "Every kiss is a world reborn 🗺️💞🏡",
  // Romantic SMS--------> 380
  "I need you like shadows need light 🔥🎶🌹",
  // Romantic SMS--------> 381
  "Together, we're unbreakable dawn 💓✨⏰",
  // Romantic SMS--------> 382
  "Your heart is my favorite haven 💖🥰🗺️",
  // Romantic SMS--------> 383
  "We chase whispers of forever 😘💕🌙",
  // Romantic SMS--------> 384
  "You're my wild heart's lullaby 🎨🔥💞",
  // Romantic SMS--------> 385
  "Love with you is timeless tide 🌟⏰❤️",
  // Romantic SMS--------> 386
  "Every touch carves our legacy ✨💓🏡",
  // Romantic SMS--------> 387
  "I cherish our shared horizons 🗺️🥰💖",
  // Romantic SMS--------> 388
  "Together, we ignite quiet fires 🎶😘🔥",
  // Romantic SMS--------> 389
  "Your love is the root of my bloom 💕🌹⏰",
  // Romantic SMS--------> 390
  "We weave nights into love's tapestry 💞✨🌟",
  // Romantic SMS--------> 391
  "You're the melody that mends me 💖🏡🎨",
  // Romantic SMS--------> 392
  "Love grows in your gentle gaze ⏰🥰💓",
  // Romantic SMS--------> 393
  "Every glance is our secret vow 🔥😘🗺️",
  // Romantic SMS--------> 394
  "I adore the peace you awaken 🌙💕✨",
  // Romantic SMS--------> 395
  "Together, we're stars in flight 💞🌟🏡",
  // Romantic SMS--------> 396
  "Your soul is my endless quest 🎶🔥❤️",
  // Romantic SMS--------> 397
  "We dance through the veil of dreams 💓⏰🥰",
  // Romantic SMS--------> 398
  "You're my heart's wild whisper 💖🌹🗺️",
  // Romantic SMS--------> 399
  "Love with you is a sacred flame ✨😘💕",
  // Romantic SMS--------> 400
  "Every moment honors our bond 🏡⏰🌟",
  // Romantic SMS--------> 401
  "I need your light to guide me 🎨💓🔥",
  // Romantic SMS--------> 402
  "Together, we bloom eternal roses 💞🌙💖",
  // Romantic SMS--------> 403
  "Your touch is my soul's delight 🗺️🥰✨",
  // Romantic SMS--------> 404
  "We chase the rhythm of us 🎶😘⏰",
  // Romantic SMS--------> 405
  "You're the fire in my quiet nights 💕🔥🌟",
  // Romantic SMS--------> 406
  "Love whispers through your smile 💓🏡🌹",
  // Romantic SMS--------> 407
  "Every kiss deepens our roots ✨💖🎨",
  // Romantic SMS--------> 408
  "I cherish how you hold my world 🥰⏰🗺️",
  // Romantic SMS--------> 409
  "Together, we're the dawn's promise 💞😘❤️",
  // Romantic SMS--------> 410
  "Your heart beats my favorite tune 🔥🌙💓",
  // Romantic SMS--------> 411
  "We weave joy from starlit threads 💕✨🏡",
  // Romantic SMS--------> 412
  "You're my eternal, tender storm 🎶🥰🔥",
  // Romantic SMS--------> 413
  "Love grows wild in your embrace 💖⏰🌟",
  // Romantic SMS--------> 414
  "Every glance reignites the spark 😘💞🗺️",
  // Romantic SMS--------> 415
  "I adore our unspoken symphony 🏡🎨💕",
  // Romantic SMS--------> 416
  "Together, we light love's lantern ✨🔥⏰",
  // Romantic SMS--------> 417
  "Your soul is my safe harbor 🌹💓🥰",
  // Romantic SMS--------> 418
  "We dance in the glow of forever 💖🌙🌟",
  // Romantic SMS--------> 419
  "You're the dream that feels like home 🎶😘💞",
  // Romantic SMS--------> 420
  "Love with you is boundless grace ⏰✨🗺️",
  // Romantic SMS--------> 421
  "Every touch is a love letter 💕🏡🔥",
  // Romantic SMS--------> 422
  "I need your heart's gentle pull 💓🥰🌹",
  // Romantic SMS--------> 423
  "Together, we're timeless echoes 💖⏰🎨",
  // Romantic SMS--------> 424
  "Your love paints my inner skies 🌟😘💕",
  // Romantic SMS--------> 425
  "We chase sunsets in your eyes 🗺️✨🏡",
  // Romantic SMS--------> 426
  "You're my wild soul's quiet song 💞🔥🌙",
  // Romantic SMS--------> 427
  "Love blooms from our shared breaths 🎶⏰❤️",
  // Romantic SMS--------> 428
  "Every moment is etched in gold 💓🥰💖",
  // Romantic SMS--------> 429
  "I cherish the way you see me 😘🌟🗺️",
  // Romantic SMS--------> 430
  "Together, we defy the night’s chill ✨💕🔥",
  // Romantic SMS--------> 431
  "Your heart is my endless voyage 🏡💞⏰",
  // Romantic SMS--------> 432
  "We weave magic in simple glances 🎨😘🌹",
  // Romantic SMS--------> 433
  "You're the light that calls me back 💖✨💓",
  // Romantic SMS--------> 434
  "Love with you is a soft revolution 🌙🥰🎶",
  // Romantic SMS--------> 435
  "Every kiss unlocks our paradise ⏰🔥🗺️",
  // Romantic SMS--------> 436
  "I adore how we fit perfectly 💕🏡🌟",
  // Romantic SMS--------> 437
  "Together, we're the heart's compass 💞😘💖",
  // Romantic SMS--------> 438
  "Your soul sings my favorite lullaby 🎶✨⏰",
  // Romantic SMS--------> 439
  "We bloom like dawn's first petals 🌹💓🥰",
  // Romantic SMS--------> 440
  "You're my fierce, tender eternity 🔥💕🗺️",
  // Romantic SMS--------> 441
  "Love grows in the cradle of us 💖🏡🌙",
  // Romantic SMS--------> 442
  "Every glance is a vow renewed 😘⏰🌟",
  // Romantic SMS--------> 443
  "I need your warmth to thrive 🎨💞🔥",
  // Romantic SMS--------> 444
  "Together, we chase eternal springs ✨💓🏡",
  // Romantic SMS--------> 445
  "Your love is my wild sanctuary 🗺️🥰💖",
  // Romantic SMS--------> 446
  "We dance through love's quiet storms 🎶😘⏰",
  // Romantic SMS--------> 447
  "You're the spark in my still waters 💕🌟❤️",
  // Romantic SMS--------> 448
  "Love whispers your essence to me 🌙✨💓",
  // Romantic SMS--------> 449
  "Every touch builds our forever 🏡🔥🥰",
  // Romantic SMS--------> 450
  "I cherish our hearts' silent pact 💞⏰🎨",
  // Romantic SMS--------> 451
  "Together, we're unbreakable dawn 💖🌹🗺️",
  // Romantic SMS--------> 452
  "Your soul is my guiding flame 😘💕🔥",
  // Romantic SMS--------> 453
  "We weave joy from moonlit threads 🌟✨🏡",
  // Romantic SMS--------> 454
  "You're my love's endless horizon 🎶⏰💓",
  // Romantic SMS--------> 455
  "Love with you is pure, fierce light 💖🥰🌙",
  // Romantic SMS--------> 456
  "Every moment honors your grace 🔥😘💞",
  // Romantic SMS--------> 457
  "I adore the fire you awaken 🗺️✨⏰",
  // Romantic SMS--------> 458
  "Together, we light the soul's path 💕🏡🌟",
  // Romantic SMS--------> 459
  "Your heart calls like a siren's song 🎨💓❤️",
  // Romantic SMS--------> 460
  "We chase the whispers of our bond 🌹🥰💖",
  // Romantic SMS--------> 461
  "You're the dream woven in my veins ✨🔥🗺️",
  // Romantic SMS--------> 462
  "Love grows roots in your smile ⏰😘💕",
  // Romantic SMS--------> 463
  "Every kiss is a star's birth 💞🌙🎶",
  // Romantic SMS--------> 464
  "I need your soul to feel whole 🏡💓🔥",
  // Romantic SMS--------> 465
  "Together, we're the night’s poetry 💖✨⏰",
  // Romantic SMS--------> 466
  "Your love is my sacred whisper 🥰🌟🗺️",
  // Romantic SMS--------> 467
  "We dance in the cradle of stars 🎨😘💞",
  // Romantic SMS--------> 468
  "You're my wild heart's haven 🌹⏰❤️",
  // Romantic SMS--------> 469
  "Love with you is a gentle blaze 💕🔥🏡",
  // Romantic SMS--------> 470
  "Every glance deepens the tie ✨💓🥰",
  // Romantic SMS--------> 471
  "I cherish how you light my dark 🎶💖🌙",
  // Romantic SMS--------> 472
  "Together, we bloom in silence 🗺️⏰🌟",
  // Romantic SMS--------> 473
  "Your soul is my favorite verse 💞😘🎨",
  // Romantic SMS--------> 474
  "We weave eternities from now 🔥✨💕",
  // Romantic SMS--------> 475
  "You're the calm in my fervent storm 💓🏡⏰",
  // Romantic SMS--------> 476
  "Love whispers through your touch 🌟🥰💖",
  // Romantic SMS--------> 477
  "Every moment is our love's art 🗺️😘🌹",
  // Romantic SMS--------> 478
  "I adore our shared wild dreams 💞🔥✨",
  // Romantic SMS--------> 479
  "Together, we're timeless rivers 🎶⏰🏡",
  // Romantic SMS--------> 480
  "Your heart beats my soul's rhythm 💖🌙💓",
  // Romantic SMS--------> 481
  "We chase the light of us eternal ✨🥰🗺️",
  // Romantic SMS--------> 482
  "You're my love's quiet revolution 💕🎨🔥",
  // Romantic SMS--------> 483
  "Love grows in the hollow of your hand 😘⏰🌟",
  // Romantic SMS--------> 484
  "Every kiss seals our wild pact 💞🏡❤️",
  // Romantic SMS--------> 485
  "I need your gaze to breathe free 🌹💓🎶",
  // Romantic SMS--------> 486
  "Together, we ignite the dawn’s edge 💖✨🗺️",
  // Romantic SMS--------> 487
  "Your soul is my endless bloom 🥰🔥⏰",
  // Romantic SMS--------> 488
  "We dance through love's veiled mysteries 🎨😘💕",
  // Romantic SMS--------> 489
  "You're the spark that mends my night 🌙💞🌟",
  // Romantic SMS--------> 490
  "Love with you is a sacred tide 💓🏡🔥",
  // Romantic SMS--------> 491
  "Every touch is a vow unspoken 🗺️✨⏰",
  // Romantic SMS--------> 492
  "I cherish the way you hold time 💖🥰🎶",
  // Romantic SMS--------> 493
  "Together, we're the heart's horizon 💕🌹💓",
  // Romantic SMS--------> 494
  "Your love is my wild, gentle call 😘⏰🏡",
  // Romantic SMS--------> 495
  "We weave stars from our whispers 🔥✨🌟",
  // Romantic SMS--------> 496
  "You're my soul's tender fire 🎨💞🗺️",
  // Romantic SMS--------> 497
  "Love blooms where your light falls 💖🌙🥰",
  // Romantic SMS--------> 498
  "Every glance is our eternal now ⏰😘💕",
  // Romantic SMS--------> 499
  "I adore how we chase the unknown 💓🔥🏡",
  // Romantic SMS--------> 500
  "Together, we're unbreakable whispers 🌟🎶❤️",
  // Romantic SMS--------> 501
  "Your heart is my favorite echo 💞✨🗺️",
  // Romantic SMS--------> 502
  "We dance in the rhythm of souls 🏡⏰💖",
  // Romantic SMS--------> 503
  "You're the dream that grounds me 🎨🥰🌹",
  // Romantic SMS--------> 504
  "Love with you is pure serenity 🔥😘💓",
  // Romantic SMS--------> 505
  "Every moment carves your name ✨⏰🌙",
  // Romantic SMS--------> 506
  "I need your peace like a river 💕🏡🎶",
  // Romantic SMS--------> 507
  "Together, we light love's quiet path 💖🔥🥰",
  // Romantic SMS--------> 508
  "Your soul calls my wandering home 🗺️💞🌟",
  // Romantic SMS--------> 509
  "We bloom under your tender sky 🎶✨⏰",
  // Romantic SMS--------> 510
  "You're my wild heart's lullaby 💓😘🏡",
  // Romantic SMS--------> 511
  "Love grows in our silent vows 🌹💕🔥",
  // Romantic SMS--------> 512
  "Every kiss awakens the stars 💖⏰🌙",
  // Romantic SMS--------> 513
  "I cherish your light in my dark 🥰🎨💞",
  // Romantic SMS--------> 514
  "Together, we're the dawn's whisper ✨🗺️❤️",
  // Romantic SMS--------> 515
  "Your love is my endless spring 🔥💓🌟",
  // Romantic SMS--------> 516
  "We chase eternities in your eyes 😘⏰💖",
  // Romantic SMS--------> 517
  "You're the melody that heals me 🏡✨🎶",
  // Romantic SMS--------> 518
  "Love with you is a gentle blaze 💕🥰🌹",
  // Romantic SMS--------> 519
  "Every touch binds our fates tight 💞🔥🗺️",
  // Romantic SMS--------> 520
  "I adore the fire you kindle 🎨💓⏰",
  // Romantic SMS--------> 521
  "Together, we weave night into day 🌙✨🏡",
  // Romantic SMS--------> 522
  "Your heart is my sacred compass 💖😘🌟",
  // Romantic SMS--------> 523
  "We dance through the heart's wild woods 🗺️🥰💕",
  // Romantic SMS--------> 524
  "You're my soul's quiet flame 🎶🔥💞",
  // Romantic SMS--------> 525
  "Love blooms fierce and true 🌹⏰❤️",
  // Romantic SMS--------> 526
  "Every glance is a love's rebirth 💓✨🏡",
  // Romantic SMS--------> 527
  "I need your warmth to unfold 💖🎨🥰",
  // Romantic SMS--------> 528
  "Together, we're timeless rivers 🔥🌟🗺️",
  // Romantic SMS--------> 529
  "Your love whispers my name softly 😘💕⏰",
  // Romantic SMS--------> 530
  "We light the path with our joy 🌙💓🎶",
  // Romantic SMS--------> 531
  "You're the dream I chase daily 💞🏡✨",
  // Romantic SMS--------> 532
  "Love with you is boundless peace 🥰🔥🌟",
  // Romantic SMS--------> 533
  "Every moment honors your light 💖⏰🗺️",
  // Romantic SMS--------> 534
  "I cherish how we entwine souls 🎨😘💕",
  // Romantic SMS--------> 535
  "Together, we defy the quiet night ✨💞🌙",
  // Romantic SMS--------> 536
  "Your heart beats my wild song 🏡🔥⏰",
  // Romantic SMS--------> 537
  "We weave magic from our breaths 💓🌹🥰",
  // Romantic SMS--------> 538
  "You're my eternal, soft horizon 💖🎶🌟",
  // Romantic SMS--------> 539
  "Love grows in your gentle fire 😘✨🗺️",
  // Romantic SMS--------> 540
  "Every kiss is our world's core 💕⏰🏡",
  // Romantic SMS--------> 541
  "I adore the spark you ignite 🎶💓🔥",
  // Romantic SMS--------> 542
  "Together, we're the soul's embrace 🌟🥰💞",
  // Romantic SMS--------> 543
  "Your love is my hidden strength 🗺️✨⏰",
  // Romantic SMS--------> 544
  "We dance in love's tender glow 💖🌙❤️",
  // Romantic SMS--------> 545
  "You're the verse that completes me 🎨😘💕",
  // Romantic SMS--------> 546
  "Love with you is a wild grace 🔥🏡⏰",
  // Romantic SMS--------> 547
  "Every touch awakens my peace 💓✨🌹",
  // Romantic SMS--------> 548
  "I need your soul's quiet call 🥰💖🌟",
  // Romantic SMS--------> 549
  "Together, we bloom like midnight flowers 🎶🗺️💞",
  // Romantic SMS--------> 550
  "Your heart is my favorite refuge ⏰😘🔥",
  // Romantic SMS--------> 551
  "We chase the light of our vows ✨🏡💓",
  // Romantic SMS--------> 552
  "You're my wild dream's anchor 💕🌙🎨",
  // Romantic SMS--------> 553
  "Love whispers through every heartbeat 💖🥰⏰",
  // Romantic SMS--------> 554
  "Every glance deepens the magic 🌟😘🗺️",
  // Romantic SMS--------> 555
  "I cherish our eternal now 🔥💞🏡",
  // Romantic SMS--------> 556
  "Together, we're stars entwined 🎶✨💕",
  // Romantic SMS--------> 557
  "Your soul lights my inner night 🌹⏰💓",
  // Romantic SMS--------> 558
  "We weave joy from silent promises 🗺️🥰💖",
  // Romantic SMS--------> 559
  "You're the flame that steadies me ✨🔥🌟",
  // Romantic SMS--------> 560
  "Love with you is pure, deep river 🎨😘⏰",
  // Romantic SMS--------> 561
  "Every moment is a love's echo 💞🏡💓",
  // Romantic SMS--------> 562
  "I adore how you fill my voids 💕🌙🔥",
  // Romantic SMS--------> 563
  "Together, we conquer the heart's wilds 🗺️✨🥰",
  // Romantic SMS--------> 564
  "Your love is my soul's sweet song 💖🎶🌟",
  // Romantic SMS--------> 565
  "We dance under fate's gentle hand ⏰😘💞",
  // Romantic SMS--------> 566
  "You're my quiet revolution's core 🔥🏡❤️",
  // Romantic SMS--------> 567
  "Love grows roots in your gaze ✨💓🌹",
  // Romantic SMS--------> 568
  "Every kiss builds our unseen bridge 🎨🥰🗺️",
  // Romantic SMS--------> 569
  "I need your light like dawn's first ray 💕⏰💖",
  // Romantic SMS--------> 570
  "Together, we're the night's tender fire 🌙🔥✨",
  // Romantic SMS--------> 571
  "Your heart calls my wandering home 💞🎶🏡",
  // Romantic SMS--------> 572
  "We bloom in the hush of us 💓😘🌟",
  // Romantic SMS--------> 573
  "You're the dream that feels eternal 🗺️🥰💕",
  // Romantic SMS--------> 574
  "Love with you is a sacred whisper 🎶✨⏰",
  // Romantic SMS--------> 575
  "Every touch honors our bond 🔥💖🌙",
  // Romantic SMS--------> 576
  "I cherish the way you see us 🏡💓🎨",
  // Romantic SMS--------> 577
  "Together, we light love's hidden paths 💞😘🗺️",
  // Romantic SMS--------> 578
  "Your soul is my endless bloom 🌟⏰❤️",
  // Romantic SMS--------> 579
  "We chase stars in your eyes ✨🥰🔥",
  // Romantic SMS--------> 580
  "You're my wild heart's peace 💕🌹💓",
  // Romantic SMS--------> 581
  "Love grows wild with your nearness 🎶🏡⏰",
  // Romantic SMS--------> 582
  "Every glance is a flame relit 💖😘🌟",
  // Romantic SMS--------> 583
  "I adore our souls' quiet dance 🗺️✨🥰",
  // Romantic SMS--------> 584
  "Together, we're timeless flames 🔥💞🎨",
  // Romantic SMS--------> 585
  "Your love is my gentle anchor ⏰💓🌙",
  // Romantic SMS--------> 586
  "We weave eternities from glances 💕😘🏡",
  // Romantic SMS--------> 587
  "You're the melody in my veins 🎶🔥💖",
  // Romantic SMS--------> 588
  "Love with you is boundless tide 🌟✨🗺️",
  // Romantic SMS--------> 589
  "Every moment sings your grace 🥰⏰💞",
  // Romantic SMS--------> 590
  "I need your heart to feel alive 💓🏡🌹",
  // Romantic SMS--------> 591
  "Together, we defy the heart's hush 🎨😘🔥",
  // Romantic SMS--------> 592
  "Your soul is my favorite light 💖🌙⏰",
  // Romantic SMS--------> 593
  "We dance through love's soft shadows ✨🥰💕",
  // Romantic SMS--------> 594
  "You're my eternal whisper's call 🗺️💓🌟",
  // Romantic SMS--------> 595
  "Love blooms in your tender hold 🎶✨🏡",
  // Romantic SMS--------> 596
  "Every kiss is our world's dawn 🔥💞⏰",
  // Romantic SMS--------> 597
  "I cherish how we merge as one 💖😘🎨",
  // Romantic SMS--------> 598
  "Together, we're the soul's sunrise 🌹🥰💓",
  // Romantic SMS--------> 599
  "Your love lights my hidden trails 🏡🔥🌟",
  // Romantic SMS--------> 600
  "We chase the rhythm of forever ✨⏰🗺️",
  // Romantic SMS--------> 601
  "You're the spark that warms my core 💕🎶💖",
  // Romantic SMS--------> 602
  "Love with you is a wild serenity 😘✨🌙",
  // Romantic SMS--------> 603
  "Every touch etches our legacy 💞🏡⏰",
  // Romantic SMS--------> 604
  "I adore the peace in your eyes 🥰💓🌹",
  // Romantic SMS--------> 605
  "Together, we bloom like star fire 🎨🔥💞",
  // Romantic SMS--------> 606
  "Your heart is my endless voyage 💖🌟🗺️",
  // Romantic SMS--------> 607
  "We weave joy from moon's soft glow 🌙😘⏰",
  // Romantic SMS--------> 608
  "You're my soul's quiet symphony ✨💕🏡",
  // Romantic SMS--------> 609
  "Love grows in the cradle of us 🎶🥰💓",
  // Romantic SMS--------> 610
  "Every glance reignites the wild 🔥⏰🌟",
  // Romantic SMS--------> 611
  "I need your light to chase shadows 💞🗺️❤️",
  // Romantic SMS--------> 612
  "Together, we're unbreakable whispers 💖✨🎨",
  // Romantic SMS--------> 613
  "Your love is my sacred bloom 😘⏰🌙",
  // Romantic SMS--------> 614
  "We dance in the heart's gentle tide 🏡💓🥰",
  // Romantic SMS--------> 615
  "You're the dream that anchors me 🌹🔥💕",
  // Romantic SMS--------> 616
  "Love with you is pure enchantment 🎶✨🗺️",
  // Romantic SMS--------> 617
  "Every moment is a vow sealed 💞⏰🌟",
  // Romantic SMS--------> 618
  "I cherish your soul's warm fire 💖😘🏡",
  // Romantic SMS--------> 619
  "Together, we light the unseen stars 🔥🥰🎨",
  // Romantic SMS--------> 620
  "Your heart calls like dawn's first song 💓🌙⏰",
  // Romantic SMS--------> 621
  "We chase eternities in quiet nights ✨💕🗺️",
  // Romantic SMS--------> 622
  "You're my wild grace's keeper 🎶🔥💞",
  // Romantic SMS--------> 623
  "Love grows roots in your whisper 🌟😘⏰",
  // Romantic SMS--------> 624
  "Every kiss builds our sacred bridge 🏡💓🌹",
  // Romantic SMS--------> 625
  "I adore how you hold my dreams 💖✨🥰",
  // Romantic SMS--------> 626
  "Together, we're the soul's horizon 🎨⏰💕",
  // Romantic SMS--------> 627
  "Your love is my gentle wildfire 🗺️🔥🌙",
  // Romantic SMS--------> 628
  "We weave magic from our glances 💞🎶🏡",
  // Romantic SMS--------> 629
  "You're the light in my wandering path 🌟😘💓",
  // Romantic SMS--------> 630
  "Love with you is a timeless river ✨⏰🗺️",
  // Romantic SMS--------> 631
  "Every touch is our love's poetry 💖🥰🔥",
  // Romantic SMS--------> 632
  "I need your heart's steady flame 🏡💞🌹",
  // Romantic SMS--------> 633
  "Together, we bloom under fate's gaze 🎨✨⏰",
  // Romantic SMS--------> 634
  "Your soul is my favorite dawn 💕🌙💓",
  // Romantic SMS--------> 635
  "We dance through the veil of joy 🔥😘🌟",
  // Romantic SMS--------> 636
  "You're my eternal, soft whisper 🗺️🥰💖",
  // Romantic SMS--------> 637
  "Love grows wild in your embrace 🎶✨🏡",
  // Romantic SMS--------> 638
  "Every moment honors our fire 💞⏰❤️",
  // Romantic SMS--------> 639
  "I cherish the way we ignite 🌹💓🔥",
  // Romantic SMS--------> 640
  "Together, we're stars in bloom 💖🎨🗺️",
  // Romantic SMS--------> 641
  "Your love lights my soul's quiet night 🌙😘⏰",
  // Romantic SMS--------> 642
  "We chase the heart's endless song ✨🥰💕",
  // Romantic SMS--------> 643
  "You're the dream that steadies me 🏡🔥🌟",
  // Romantic SMS--------> 644
  "Love with you is boundless grace 💓🎶💞",
  // Romantic SMS--------> 645
  "Every glance is a world reborn ⏰✨🗺️",
  // Romantic SMS--------> 646
  "I adore our souls' tender dance 💖😘🏡",
  // Romantic SMS--------> 647
  "Together, we defy love's hush 🔥🥰🌙",
  // Romantic SMS--------> 648
  "Your heart is my wild sanctuary 🎨💕⏰",
  // Romantic SMS--------> 649
  "We weave nights into golden vows 💞🌹💓",
  // Romantic SMS--------> 650
  "You're my love's quiet revolution 🌟😘🔥",
  // Romantic SMS--------> 651
  "Love whispers through your nearness 🗺️✨🏡",
  // Romantic SMS--------> 652
  "Every kiss etches our eternity 🎶⏰💖",
  // Romantic SMS--------> 653
  "I need your light like a heartbeat 🥰💞🌟",
  // Romantic SMS--------> 654
  "Together, we're the dawn's embrace 💓🎨🗺️",
  // Romantic SMS--------> 655
  "Your soul calls my heart home 🔥✨⏰",
  // Romantic SMS--------> 656
  "We bloom in the glow of us 💕🌙😘",
  // Romantic SMS--------> 657
  "You're the melody that binds me 💖🏡🎶",
  // Romantic SMS--------> 658
  "Love with you is a sacred spark 🌹🥰💓",
  // Romantic SMS--------> 659
  "Every moment is our love's verse ✨⏰🔥",
  // Romantic SMS--------> 660
  "I cherish how you light my way 🗺️💞🌟",
  // Romantic SMS--------> 661
  "Together, we chase the soul's fire 🎨😘💕",
  // Romantic SMS--------> 662
  "Your love is my endless bloom 🏡✨⏰",
  // Romantic SMS--------> 663
  "We dance through eternities hand in hand 💖🌙🥰",
  // Romantic SMS--------> 664
  "You're my wild heart's gentle tie 🎶🔥💞",
  // Romantic SMS--------> 665
  "Love grows in the hush of your voice 🌟⏰❤️",
  // Romantic SMS--------> 666
  "Every glance deepens our wild bond 💓😘🗺️",
  // Romantic SMS--------> 667
  "I adore the peace you weave 🏡✨💖",
  // Romantic SMS--------> 668
  "Together, we're timeless whispers 🔥🥰🎨",
  // Romantic SMS--------> 669
  "Your heart is my favorite light 💕🌹⏰",
  // Romantic SMS--------> 670
  "We weave joy from star-kissed nights 🌙💓🌟",
  // Romantic SMS--------> 671
  "You're the dream that feels like fate 🎶😘💞",
  // Romantic SMS--------> 672
  "Love with you is pure, deep magic ✨🗺️🏡",
  // Romantic SMS--------> 673
  "Every touch is a love's renewal ⏰🔥💕",
  // Romantic SMS--------> 674
  "I need your soul to soar free 💖🥰🌙",
  // Romantic SMS--------> 675
  "Together, we light the heart's core 🎨✨💓",
  // Romantic SMS--------> 676
  "Your love whispers my wild peace 🗺️⏰🌟",
  // Romantic SMS--------> 677
  "We chase the rhythm of our dawn 🔥😘🏡",
  // Romantic SMS--------> 678
  "You're my eternal, tender flame 💞🎶❤️",
  // Romantic SMS--------> 679
  "Love blooms where souls entwine 🌹✨🥰",
  // Romantic SMS--------> 680
  "Every kiss builds our quiet world 💖⏰💕",
  // Romantic SMS--------> 681
  "I cherish the spark in your gaze 🎨💓🗺️",
  // Romantic SMS--------> 682
  "Together, we're the night's grace 🌙🔥🌟",
  // Romantic SMS--------> 683
  "Your heart calls like a soft tide 🏡😘⏰",
  // Romantic SMS--------> 684
  "We dance in love's hidden glow 💞✨🎶",
  // Romantic SMS--------> 685
  "You're the light that holds my dreams 💕🥰💖",
  // Romantic SMS--------> 686
  "Love with you is a wild whisper 🎨🔥🌙",
  // Romantic SMS--------> 687
  "Every moment etches your essence ⏰💓🗺️",
  // Romantic SMS--------> 688
  "I adore how we bloom together 🌟😘🏡",
  // Romantic SMS--------> 689
  "Together, we're unbreakable stars ✨💞⏰",
  // Romantic SMS--------> 690
  "Your soul is my gentle wildfire 🗺️🥰🔥",
  // Romantic SMS--------> 691
  "We weave eternities from your smile 🎶💕🌹",
  // Romantic SMS--------> 692
  "You're my love's sacred horizon 💖✨🏡",
  // Romantic SMS--------> 693
  "Love grows in the cradle of us 🌙⏰💓",
  // Romantic SMS--------> 694
  "Every glance is our heart's vow 🔥😘🌟",
  // Romantic SMS--------> 695
  "I need your touch like dawn's breath 💞🎨🥰",
  // Romantic SMS--------> 696
  "Together, we chase the soul's light 🗺️✨💖",
  // Romantic SMS--------> 697
  "Your love is my wild sanctuary 🏡🔥⏰",
  // Romantic SMS--------> 698
  "We dance through the stars' embrace 🎶💓🌙",
  // Romantic SMS--------> 699
  "You're the melody that frees me 💕😘🌟",
  // Romantic SMS--------> 700
  "Love with you is timeless bloom ✨⏰💞",
  // Romantic SMS--------> 701
  "Every kiss honors our wild tie 🎨🥰🗺️",
  // Romantic SMS--------> 702
  "I cherish your heart's quiet song 💖🌹🔥",
  // Romantic SMS--------> 703
  "Together, we're the dawn's whisper 🏡✨⏰",
  // Romantic SMS--------> 704
  "Your soul lights my endless path 💓🎶🌟",
  // Romantic SMS--------> 705
  "We weave joy from love's soft threads 😘💕🗺️",
  // Romantic SMS--------> 706
  "You're my fierce, tender eternity 🌙🔥💖",
  // Romantic SMS--------> 707
  "Love grows roots in your nearness ⏰🥰💞",
  // Romantic SMS--------> 708
  "Every moment is a love reborn 🎨✨🏡",
  // Romantic SMS--------> 709
  "I adore the fire we share quietly 💓🌟🔥",
  // Romantic SMS--------> 710
  "Together, we defy the heart's night 🗺️😘⏰",
  // Romantic SMS--------> 711
  "Your love is my soul's sweet anchor 💕🎶🌙",
  // Romantic SMS--------> 712
  "We chase stars in our embrace 💖✨🥰",
  // Romantic SMS--------> 713
  "You're the dream that steadies my wild 🎶🔥💓",
  // Romantic SMS--------> 714
  "Love with you is a gentle revolution 🏡⏰🌟",
  // Romantic SMS--------> 715
  "Every touch awakens our bond 😘💞🗺️",
  // Romantic SMS--------> 716
  "I need your light to feel whole 🌹✨⏰",
  // Romantic SMS--------> 717
  "Together, we're timeless flames 🎨🥰💕",
  // Romantic SMS--------> 718
  "Your heart is my favorite dawn 💖🔥🌙",
  // Romantic SMS--------> 719
  "We weave magic from whispered vows 🗺️💓🏡",
  // Romantic SMS--------> 720
  "You're my wild soul's peace 🌟😘⏰",
  // Romantic SMS--------> 721
  "Love blooms in the hush of us 🎶✨💞",
  // Romantic SMS--------> 722
  "Every glance deepens the grace 🔥🥰🌹",
  // Romantic SMS--------> 723
  "I cherish how you call me home 💕🏡💓",
  // Romantic SMS--------> 724
  "Together, we light love's quiet fire ✨⏰🗺️",
  // Romantic SMS--------> 725
  "Your love whispers through my veins 💖🎨🌟",
  // Romantic SMS--------> 726
  "We dance in the soul's tender light 😘🔥🥰",
  // Romantic SMS--------> 727
  "You're the spark that blooms eternal 🌙💞⏰",
  // Romantic SMS--------> 728
  "Love with you is pure, wild river 🗺️✨💕",
  // Romantic SMS--------> 729
  "Every moment honors your essence 🎶⏰🏡",
  // Romantic SMS--------> 730
  "I adore our hearts' silent song 💓🌟🔥",
  // Romantic SMS--------> 731
  "Together, we're the night's bloom 💖😘🎨",
  // Romantic SMS--------> 732
  "Your soul is my endless whisper 🏡🥰🌙",
  // Romantic SMS--------> 733
  "We chase the light of our unity ✨💞🗺️",
  // Romantic SMS--------> 734
  "You're my love's gentle wildfire 🎶🔥⏰",
  // Romantic SMS--------> 735
  "Love grows in your soul's embrace 💕🌹💓",
  // Romantic SMS--------> 736
  "Every kiss is a star's quiet fall 🌟😘🏡",
  // Romantic SMS--------> 737
  "I need your heart like night's peace ⏰✨🥰",
  // Romantic SMS--------> 738
  "Together, we weave dawn's first light 💖🎨🔥",
  // Romantic SMS--------> 739
  "Your love is my wild, sacred tie 🗺️💞🌙",
  // Romantic SMS--------> 740
  "We dance through eternities softly 🎶⏰💕",
  // Romantic SMS--------> 741
  "You're the melody in my depths 💓😘🌟",
  // Romantic SMS--------> 742
  "Love with you is a boundless hush ✨🏡🗺️",
  // Romantic SMS--------> 743
  "Every touch builds our quiet world 🔥🥰💖",
  // Romantic SMS--------> 744
  "I cherish the way you bloom me 🎨💓🌹",
  // Romantic SMS--------> 745
  "Together, we're stars in quiet flight 💞✨⏰",
  // Romantic SMS--------> 746
  "Your heart calls my soul to rest 🏡🔥🌙",
  // Romantic SMS--------> 747
  "We chase whispers of our forever 😘🎶💕",
  // Romantic SMS--------> 748
  "You're my eternal, tender spark 🌟⏰💞",
  // Romantic SMS--------> 749
  "Love grows wild in your light 💖✨🗺️",
  // Romantic SMS--------> 750
  "Every glance is a love's gentle tie 🥰🔥🏡",
  // Romantic SMS--------> 751
  "I adore how we light each other 🎨💓🌟",
  // Romantic SMS--------> 752
  "Together, we're the soul's dawn song 💕⏰🌙",
  // Romantic SMS--------> 753
  "Your love is my hidden bloom 🌹😘💖",
  // Romantic SMS--------> 754
  "We weave joy from heart's soft threads 🗺️✨🎶",
  // Romantic SMS--------> 755
  "You're the dream that feels like us 🔥🥰💞",
  // Romantic SMS--------> 756
  "Love with you is timeless grace ⏰🏡💓",
  // Romantic SMS--------> 757
  "Every moment etches our peace ✨🌟😘",
  // Romantic SMS--------> 758
  "I need your soul's quiet fire 💖🎨🗺️",
  // Romantic SMS--------> 759
  "Together, we defy love's shadows 🎶🔥🥰",
  // Romantic SMS--------> 760
  "Your heart is my wild haven 💕⏰🌹",
  // Romantic SMS--------> 761
  "We dance in the glow of souls 🌙✨💞",
  // Romantic SMS--------> 762
  "You're my love's endless whisper 🏡😘⏰",
  // Romantic SMS--------> 763
  "Love blooms where our lights meet 💓🎶🌟",
  // Romantic SMS--------> 764
  "Every kiss honors the wild us 🔥💖🗺️",
  // Romantic SMS--------> 765
  "I cherish your heart's gentle pull 🥰✨🏡",
  // Romantic SMS--------> 766
  "Together, we're unbreakable tides 🎨⏰💕",
  // Romantic SMS--------> 767
  "Your soul lights my quiet nights 🌹💓🔥",
  // Romantic SMS--------> 768
  "We chase the rhythm of grace 😘✨🌙",
  // Romantic SMS--------> 769
  "You're the spark in my serenity 💖🎶🥰",
  // Romantic SMS--------> 770
  "Love with you is a soft wildfire 🗺️⏰💞",
  // Romantic SMS--------> 771
  "Every touch is our love's verse 🌟🏡💓",
  // Romantic SMS--------> 772
  "I adore how you hold the stars 🎨😘🔥",
  // Romantic SMS--------> 773
  "Together, we bloom eternal flames 💕✨⏰",
  // Romantic SMS--------> 774
  "Your love is my soul's anchor 🏡🌙💖",
  // Romantic SMS--------> 775
  "We weave dreams from your gaze 🎶🥰🌟",
  // Romantic SMS--------> 776
  "You're my wild heart's quiet song 💞🔥🗺️",
  // Romantic SMS--------> 777
  "Love grows in the hush of us ⏰😘💓",
  // Romantic SMS--------> 778
  "Every glance deepens the bloom ✨🏡🌹",
  // Romantic SMS--------> 779
  "I need your light like a vow 💖🎨⏰",
  // Romantic SMS--------> 780
  "Together, we're the dawn's secret 🔥🥰💕",
  // Romantic SMS--------> 781
  "Your heart calls across my dreams 🌙✨💞",
  // Romantic SMS--------> 782
  "We dance through love's gentle wild 🎶😘🗺️",
  // Romantic SMS--------> 783
  "You're the melody that grounds me 💓🌟🏡",
  // Romantic SMS--------> 784
  "Love with you is pure, deep peace ⏰🔥💖",
  // Romantic SMS--------> 785
  "Every moment is a heart's whisper ✨🥰🎨",
  // Romantic SMS--------> 786
  "I cherish the fire you share 🗺️💕🌙",
  // Romantic SMS--------> 787
  "Together, we light the soul's path 💞⏰🌟",
  // Romantic SMS--------> 788
  "Your soul is my favorite tide 🎶😘🔥",
  // Romantic SMS--------> 789
  "We chase stars in our quiet bond 🏡✨💓",
  // Romantic SMS--------> 790
  "You're my eternal bloom's keeper 💖🌹🥰",
  // Romantic SMS--------> 791
  "Love grows wild with your touch ⏰🎨💞",
  // Romantic SMS--------> 792
  "Every kiss is a world's renewal 🌟😘🗺️",
  // Romantic SMS--------> 793
  "I adore how we weave the night 🔥✨🏡",
  // Romantic SMS--------> 794
  "Together, we're timeless rivers 💕⏰💓",
  // Romantic SMS--------> 795
  "Your love lights my inner dawn 🎶🥰🌙",
  // Romantic SMS--------> 796
  "We dance in the heart's soft fire 🗺️🔥💖",
  // Romantic SMS--------> 797
  "You're the dream that calls me home ✨💞🌟",
  // Romantic SMS--------> 798
  "Love with you is a sacred hush 🎨😘⏰",
  // Romantic SMS--------> 799
  "Every glance honors our wild grace 💓🏡🌹",
  // Romantic SMS--------> 800
  "I need your soul like breath's peace 💖✨🥰",
  // Romantic SMS--------> 801
  "Together, we bloom under love's sky 🎶⏰🗺️",
  // Romantic SMS--------> 802
  "Your heart is my quiet wildfire 🔥💕🌙",
  // Romantic SMS--------> 803
  "We weave joy from eternities' edge 🌟😘💞",
  // Romantic SMS--------> 804
  "You're my love's gentle revolution 🏡✨⏰",
  // Romantic SMS--------> 805
  "Love grows in your soul's whisper 🎨💓🔥",
  // Romantic SMS--------> 806
  "Every moment etches our light 💖🥰🗺️",
  // Romantic SMS--------> 807
  "I cherish the way you bloom us 🌹⏰🌟",
  // Romantic SMS--------> 808
  "Together, we're the night's tender song 😘💕🎶",
  // Romantic SMS--------> 809
  "Your love is my wild sanctuary 🗺️✨🏡",
  // Romantic SMS--------> 810
  "We chase the heart's endless bloom 🔥💞⏰",
  // Romantic SMS--------> 811
  "You're the melody in my peace 🎶🥰💓",
  // Romantic SMS--------> 812
  "Love with you is timeless wild 🌙🔥🌟",
  // Romantic SMS--------> 813
  "Every touch is a love's quiet vow ✨⏰💖",
  // Romantic SMS--------> 814
  "I adore our souls' shared fire 🏡😘🎨",
  // Romantic SMS--------> 815
  "Together, we light love's hidden dawn 💕✨🗺️",
  // Romantic SMS--------> 816
  "Your soul calls my heart to wild joy 💞🎶🌹",
  // Romantic SMS--------> 817
  "We dance through the grace of us ⏰🥰🔥",
  // Romantic SMS--------> 818
  "You're my eternal whisper's light 🌟💓🏡",
  // Romantic SMS--------> 819
  "Love blooms where our dreams meet 😘✨⏰",
  // Romantic SMS--------> 820
  "Every kiss builds our sacred wild 💖🎨💞",
  // Romantic SMS--------> 821
  "I need your touch like stars' peace 🗺️🥰🌙",
  // Romantic SMS--------> 822
  "Together, we're unbreakable blooms 🔥💕🌟",
  // Romantic SMS--------> 823
  "Your love is my soul's soft fire 🏡⏰💓",
  // Romantic SMS--------> 824
  "We weave eternities from your gaze 🎶😘✨",
  // Romantic SMS--------> 825
  "You're the spark that holds my night 💖🌹🗺️",
  // Romantic SMS--------> 826
  "Love with you is a gentle tide ⏰🔥🥰",
  // Romantic SMS--------> 827
  "Every moment is our love's hush 🌙💞🏡",
  // Romantic SMS--------> 828
  "I cherish how you light my wild 🎨💓🌟",
  // Romantic SMS--------> 829
  "Together, we chase the soul's grace 😘✨⏰",
  // Romantic SMS--------> 830
  "Your heart is my endless whisper 💕🎶🔥",
  // Romantic SMS--------> 831
  "We dance in the bloom of us 🗺️🥰💖",
  // Romantic SMS--------> 832
  "You're my wild dream's quiet tie 🌟⏰💞",
  // Romantic SMS--------> 833
  "Love grows roots in your light 🏡✨🌹",
  // Romantic SMS--------> 834
  "Every glance is a heart's renewal 🔥😘🎨",
  // Romantic SMS--------> 835
  "I adore the peace you awaken 💓⏰🗺️",
  // Romantic SMS--------> 836
  "Together, we're timeless stars 💖🌙🥰",
  // Romantic SMS--------> 837
  "Your soul is my favorite bloom 🎶🔥💕",
  // Romantic SMS--------> 838
  "We weave joy from love's wild hush ✨🏡⏰",
  // Romantic SMS--------> 839
  "You're the melody that frees my soul 💞🌟😘",
  // Romantic SMS--------> 840
  "Love with you is pure eternity 🗺️⏰💓",
  // Romantic SMS--------> 841
  "Every touch honors our quiet fire 🎨✨🔥",
  // Romantic SMS--------> 842
  "I need your heart like dawn's grace 💖🥰🌙",
  // Romantic SMS--------> 843
  "Together, we light the heart's wild path 🏡💞🌟",
  // Romantic SMS--------> 844
  "Your love whispers through the stars 😘⏰🎶",
  // Romantic SMS--------> 845
  "We chase the light of our bond 🔥✨🗺️",
  // Romantic SMS--------> 846
  "You're my eternal, gentle wild 💕🎨💓",
  // Romantic SMS--------> 847
  "Love grows in the soul's embrace 🌹🥰⏰",
  // Romantic SMS--------> 848
  "Every kiss is a world's soft dawn 💖🏡🌟",
  // Romantic SMS--------> 849
  "I cherish your light's quiet call 🎶😘🔥",
  // Romantic SMS--------> 850
  "Together, we're the night's bloom 🗺️✨💞",
  // Romantic SMS--------> 851
  "Your heart beats my wild peace ⏰💓🌙",
  // Romantic SMS--------> 852
  "We dance through love's tender hush 🎨🥰💕",
  // Romantic SMS--------> 853
  "You're the dream that lights my way 💖🌟🗺️",
  // Romantic SMS--------> 854
  "Love with you is a sacred river 🔥⏰🏡",
  // Romantic SMS--------> 855
  "Every moment weaves our grace 😘💞🎶",
  // Romantic SMS--------> 856
  "I adore how we hold the stars ✨⏰🌹",
  // Romantic SMS--------> 857
  "Together, we bloom in wild silence 🗺️💓🥰",
  // Romantic SMS--------> 858
  "Your soul is my endless song 🎶🔥🌙",
  // Romantic SMS--------> 859
  "We chase eternities in your eyes 💕✨🏡",
  // Romantic SMS--------> 860
  "You're my love's quiet wildfire 💖⏰💞",
  // Romantic SMS--------> 861
  "Love grows wild with your whisper 🌟😘🎨",
  // Romantic SMS--------> 862
  "Every glance deepens the hush 🏡🔥⏰",
  // Romantic SMS--------> 863
  "I need your light like a vow's peace 💓🥰🌟",
  // Romantic SMS--------> 864
  "Together, we're the soul's soft flame ✨💖🗺️",
  // Romantic SMS--------> 865
  "Your heart calls my wild home 🎶🌙💕",
  // Romantic SMS--------> 866
  "We weave joy from dawn's first light 😘⏰🏡",
  // Romantic SMS--------> 867
  "You're the melody in my wild grace 🎨🔥💞",
  // Romantic SMS--------> 868
  "Love with you is timeless bloom 🌹✨⏰",
  // Romantic SMS--------> 869
  "Every touch is our love's quiet star 💓🥰🌟",
  // Romantic SMS--------> 870
  "I cherish the way you light us 🗺️💖🎶",
  // Romantic SMS--------> 871
  "Together, we dance through eternities 🔥😘🏡",
  // Romantic SMS--------> 872
  "Your love is my sacred wild 💕⏰🌙",
  // Romantic SMS--------> 873
  "We chase the heart's gentle fire ✨💞🎨",
  // Romantic SMS--------> 874
  "You're my soul's endless whisper 🏡🔥⏰",
  // Romantic SMS--------> 875
  "Love grows in your tender wild 🌟🥰💓",
  // Romantic SMS--------> 876
  "Every kiss honors our bloom 🎶😘🗺️",
  // Romantic SMS--------> 877
  "I adore how we weave the light 💖✨⏰",
  // Romantic SMS--------> 878
  "Together, we're unbreakable grace 🗺️💕🌙",
  // Romantic SMS--------> 879
  "Your heart is my favorite dawn 🎨🔥🥰",
  // Romantic SMS--------> 880
  "We light the path with our souls 💞🌟🏡",
  // Romantic SMS--------> 881
  "You're the dream that calls softly 💓⏰🌹",
  // Romantic SMS--------> 882
  "Love with you is a wild hush ✨😘🎶",
  // Romantic SMS--------> 883
  "Every moment is our quiet vow 🔥💖🗺️",
  // Romantic SMS--------> 884
  "I need your peace like stars' glow 🏡🥰💞",
  // Romantic SMS--------> 885
  "Together, we bloom eternal tides ⏰✨🌟",
  // Romantic SMS--------> 886
  "Your love lights my wild heart 🎶🔥💓",
  // Romantic SMS--------> 887
  "We dance in the soul's embrace 🌙😘⏰",
  // Romantic SMS--------> 888
  "You're my eternal, gentle spark 💕🏡🌟",
  // Romantic SMS--------> 889
  "Love grows roots in our whispers 🗺️✨💖",
  // Romantic SMS--------> 890
  "Every glance is a love's soft tie 🎨🥰💞",
  // Romantic SMS--------> 891
  "I cherish your soul's wild call 🌹⏰🔥",
  // Romantic SMS--------> 892
  "Together, we're the dawn's quiet song 💓🎶🗺️",
  // Romantic SMS--------> 893
  "Your heart beats my endless peace 😘✨🏡",
  // Romantic SMS--------> 894
  "We weave stars from love's hush 💖🌙⏰",
  // Romantic SMS--------> 895
  "You're the melody that blooms me 🎨🔥🥰",
  // Romantic SMS--------> 896
  "Love with you is pure, deep wild 💕🌟💞",
  // Romantic SMS--------> 897
  "Every touch awakens our grace 🗺️😘⏰",
  // Romantic SMS--------> 898
  "I adore how you hold the night ✨🏡💓",
  // Romantic SMS--------> 899
  "Together, we chase eternities' light 🎶⏰🌹",
  // Romantic SMS--------> 900
  "You are my irreplaceable world 💕 🥰",
  // Romantic SMS--------> 901
  "Your love is my endless light 💖 ✨ 🌙",
  // Romantic SMS--------> 902
  "I crave your heart's gentle fire 🔥 🥰 💓",
  // Romantic SMS--------> 903
  "Together, we bloom in quiet joy 🏡 💞 ⏰",
  // Romantic SMS--------> 904
  "You're my soul's wild sanctuary 🎶 😘 🌟",
  // Romantic SMS--------> 905
  "Love whispers your name forever 💕 ✨ 🗺️",
  // Romantic SMS--------> 906
  "Every kiss seals our tender bond 🌹 💖 🔥",
  // Romantic SMS--------> 907
  "I cherish the peace you bring me 🏡 🥰 🎨",
  // Romantic SMS--------> 908
  "Your touch lights my hidden dreams ⏰ 💓 🌙",
  // Romantic SMS--------> 909
  "We dance through love's soft wild ✨ 💞 🌟",
  // Romantic SMS--------> 910
  "You're the spark in my heart's hush 🎶 😘 💖",
  // Romantic SMS--------> 911
  "Love grows wild with your soul 🗺️ 🔥 🏡",
  // Romantic SMS--------> 912
  "Every glance is our eternal vow 💕 ⏰ 💓",
  // Romantic SMS--------> 913
  "I need your light like dawn's grace 🌟 🥰 ✨",
  // Romantic SMS--------> 914
  "Together, we're timeless whispers 💖 🎨 🗺️",
  // Romantic SMS--------> 915
  "Your love is my quiet wildfire 🌙 💞 ⏰",
  // Romantic SMS--------> 916
  "We weave joy from your gentle gaze 😘 💓 🌹",
  // Romantic SMS--------> 917
  "You're my wild dream's anchor 🔥 🏡 💕",
  // Romantic SMS--------> 918
  "Love with you is a sacred bloom 🎶 ✨ 🌟",
  // Romantic SMS--------> 919
  "Every moment honors our grace 💖 ⏰ 🥰",
  // Romantic SMS--------> 920
  "I adore how we light the night 🗺️ 💞 🎨",
  // Romantic SMS--------> 921
  "Together, we chase the heart's song 🌙 😘 ⏰",
  // Romantic SMS--------> 922
  "Your soul is my endless peace 💓 🔥 💖",
  // Romantic SMS--------> 923
  "We dance in love's tender light ✨ 🏡 🌟",
  // Romantic SMS--------> 924
  "You're the melody that holds me 🎶 🥰 💕",
  // Romantic SMS--------> 925
  "Love grows roots in your whisper 💞 🌹 🗺️",
  // Romantic SMS--------> 926
  "Every kiss is a star's quiet fall ⏰ 😘 💓",
  // Romantic SMS--------> 927
  "I cherish your heart's wild call 🔥 ✨ 🏡",
  // Romantic SMS--------> 928
  "Together, we're the dawn's embrace 💖 🎨 🌙",
  // Romantic SMS--------> 929
  "Your love lights my soul's path 🥰 💞 ⏰",
  // Romantic SMS--------> 930
  "We weave eternities from glances 🌟 😘 🗺️",
  // Romantic SMS--------> 931
  "You're my eternal, soft flame 💕 🔥 💓",
  // Romantic SMS--------> 932
  "Love with you is pure serenity 🎶 ✨ 🌟",
  // Romantic SMS--------> 933
  "Every touch builds our quiet world 🏡 ⏰ 💖",
  // Romantic SMS--------> 934
  "I need your grace like night's hush 🌙 🥰 💞",
  // Romantic SMS--------> 935
  "Together, we bloom under stars 😘 🎨 🗺️",
  // Romantic SMS--------> 936
  "Your heart is my favorite light 💓 🌹 🔥",
  // Romantic SMS--------> 937
  "We chase the rhythm of us eternal ✨ ⏰ 🌟",
  // Romantic SMS--------> 938
  "You're the dream that steadies wild 💖 🏡 🎶",
  // Romantic SMS--------> 939
  "Love grows in your soul's embrace 💕 😘 💓",
  // Romantic SMS--------> 940
  "Every glance deepens our peace 🗺️ ✨ 🏡",
  // Romantic SMS--------> 941
  "I adore the fire you awaken 🎨 🥰 ⏰",
  // Romantic SMS--------> 942
  "Together, we're unbreakable bloom 🌙 💞 🌟",
  // Romantic SMS--------> 943
  "Your love is my wild whisper 🔥 💖 🎶",
  // Romantic SMS--------> 944
  "We dance through the soul's grace 😘 ⏰ 🗺️",
  // Romantic SMS--------> 945
  "You're my heart's quiet revolution 💓 ✨ 🏡",
  // Romantic SMS--------> 946
  "Love with you is a gentle wild 🌹 🥰 💕",
  // Romantic SMS--------> 947
  "Every moment is our love's hush 🎨 ⏰ 🌙",
  // Romantic SMS--------> 948
  "I cherish how we entwine softly 💖 🔥 🌟",
  // Romantic SMS--------> 949
  "Together, we light the unseen path 🗺️ 💞 😘",
  // Romantic SMS--------> 950
  "Your soul calls my wild home 🎶 ⏰ 💓",
  // Romantic SMS--------> 951
  "We weave joy from dawn's light ✨ 🏡 🌟",
  // Romantic SMS--------> 952
  "You're the melody in my peace 💕 🎨 🥰",
  // Romantic SMS--------> 953
  "Love grows wild with your touch 🌙 🔥 💖",
  // Romantic SMS--------> 954
  "Every kiss honors our bond 😘 ⏰ 💞",
  // Romantic SMS--------> 955
  "I need your light like a vow's glow 🗺️ ✨ 🎶",
  // Romantic SMS--------> 956
  "Together, we're timeless stars 🏡 💓 🌹",
  // Romantic SMS--------> 957
  "Your love is my sacred hush 🎨 🥰 ⏰",
  // Romantic SMS--------> 958
  "We chase eternities in quiet grace 🌟 😘 💕",
  // Romantic SMS--------> 959
  "You're my wild soul's anchor 💖 🔥 🗺️",
  // Romantic SMS--------> 960
  "Love with you is pure bloom ✨ ⏰ 🌙",
  // Romantic SMS--------> 961
  "Every glance is a heart's soft tie 🎶 💞 🏡",
  // Romantic SMS--------> 962
  "I adore the peace you weave 💓 🌹 🥰",
  // Romantic SMS--------> 963
  "Together, we defy the gentle night 🔥 ✨ ⏰",
  // Romantic SMS--------> 964
  "Your heart beats my favorite song 😘 💖 🌟",
  // Romantic SMS--------> 965
  "We dance in love's wild whisper 🗺️ 🎨 💓",
  // Romantic SMS--------> 966
  "You're the spark that blooms me 🏡 🥰 💕",
  // Romantic SMS--------> 967
  "Love grows roots in your grace 🌙 ⏰ 🎶",
  // Romantic SMS--------> 968
  "Every moment etches our light 💞 😘 🔥",
  // Romantic SMS--------> 969
  "I cherish your soul's quiet call ✨ 🗺️ 💖",
  // Romantic SMS--------> 970
  "Together, we're the dawn's soft fire 🎨 ⏰ 🌟",
  // Romantic SMS--------> 971
  "Your love lights my endless wild 🏡 💓 🌹",
  // Romantic SMS--------> 972
  "We weave stars from our hush 😘 ✨ 🥰",
  // Romantic SMS--------> 973
  "You're my eternal melody's tie 🎶 🔥 💞",
  // Romantic SMS--------> 974
  "Love with you is a sacred peace ⏰ 🌙 💕",
  // Romantic SMS--------> 975
  "Every touch is our love's dawn 🌟 🗺️ 💓",
  // Romantic SMS--------> 976
  "I need your heart like stars' hush 💖 🎨 🏡",
  // Romantic SMS--------> 977
  "Together, we bloom in wild grace 🔥 😘 ⏰",
  // Romantic SMS--------> 978
  "Your soul is my gentle wild ✨ 🥰 🌟",
  // Romantic SMS--------> 979
  "We chase the light of our vows 🎶 💞 🌙",
  // Romantic SMS--------> 980
  "You're the dream that holds my fire 💕 ⏰ 🗺️",
  // Romantic SMS--------> 981
  "Love grows in your soul's whisper 🏡 😘 💓",
  // Romantic SMS--------> 982
  "Every kiss builds our quiet bloom 🌹 ✨ 🎨",
  // Romantic SMS--------> 983
  "I adore how we light the wild 💖 🥰 🔥",
  // Romantic SMS--------> 984
  "Together, we're timeless whispers 🌟 ⏰ 💞",
  // Romantic SMS--------> 985
  "Your love is my heart's soft song 🗺️ 🎶 🌙",
  // Romantic SMS--------> 986
  "We dance through eternities' hush 😘 ✨ 🏡",
  // Romantic SMS--------> 987
  "You're my wild peace's keeper 💓 🥰 💕",
  // Romantic SMS--------> 988
  "Love with you is pure, gentle tide 🎨 ⏰ 🌟",
  // Romantic SMS--------> 989
  "Every moment honors the grace 🔥 💖 🗺️",
  // Romantic SMS--------> 990
  "I cherish your light's wild call 🌙 💞 😘",
  // Romantic SMS--------> 991
  "Together, we weave the soul's dawn 🎶 ✨ ⏰",
  // Romantic SMS--------> 992
  "Your heart is my endless bloom 🏡 💓 🌹",
  // Romantic SMS--------> 993
  "We chase stars in love's quiet fire 🗺️ 🥰 🔥",
  // Romantic SMS--------> 994
  "You're the melody that ties my wild 💕 🎨 💖",
  // Romantic SMS--------> 995
  "Love grows roots in our shared hush 🌟 ⏰ 😘",
  // Romantic SMS--------> 996
  "Every glance is a love's soft wild ✨ 💞 🏡",
  // Romantic SMS--------> 997
  "I need your soul like night's grace 🎶 🔥 🌙",
  // Romantic SMS--------> 998
  "Together, we're the heart's eternal whisper 💓 🥰 🗺️",
  // Romantic SMS--------> 999
  "Your love lights my wild serenity ⏰ 💖 🌟",
  // Romantic SMS--------> 1000
  "We bloom forever in your embrace 😘 💕 ✨",
  // Romantic SMS--------> 1001
  "My heart beats your name in every rhythm of life 🕊️ 💓 ",
];
const scene = document.getElementById("scene");
const heartBtn = document.getElementById("heartBtn");
const musicPlayer = document.getElementById("musicPlayer");
const audioPlayer = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const progressBar = document.getElementById("progressBar");
const progressFill = document.getElementById("progressFill");
const currentTimeEl = document.getElementById("currentTime");
const totalTimeEl = document.getElementById("totalTime");
const floatingHeartsContainer = document.getElementById("floatingHearts");
const counterEl = document.getElementById("counter");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
let isProcessing = false;
let firstClick = true;
let isPlaying = false;
let pressCount = 0;
// Create floating hearts on load
function initFloatingHearts() {
  const numHearts = 30;
  for (let i = 0; i < numHearts; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-float";
    heart.textContent = "❤️";
    heart.style.setProperty("--left", `${Math.random() * 100}%`);
    heart.style.setProperty("--duration", `${rand(10, 20)}s`);
    heart.style.setProperty("--delay", `-${Math.random() * 20}s`);
    heart.style.setProperty("--rot", `${rand(-45, 45)}deg`);
    heart.style.setProperty("--size", `${rand(15, 30)}px`);
    floatingHeartsContainer.appendChild(heart);
  }
}
initFloatingHearts();
function triggerRelease(e) {
  if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") {
    return;
  }
  e.preventDefault();
  if (isProcessing) return;
  isProcessing = true;
  // Start music on first click
  if (firstClick) {
    activateMusic();
    firstClick = false;
  }
  releasePhrase();
  setTimeout(() => {
    isProcessing = false;
  }, 300);
}
function activateMusic() {
  musicPlayer.classList.add("active");
  audioPlayer
    .play()
    .then(() => {
      isPlaying = true;
      showPauseIcon();
    })
    .catch((e) => {
      console.log("Error playing audio:", e);
    });
}
function showPlayIcon() {
  playIcon.style.display = "block";
  pauseIcon.style.display = "none";
}
function showPauseIcon() {
  playIcon.style.display = "none";
  pauseIcon.style.display = "block";
}
function togglePlayPause() {
  if (isPlaying) {
    audioPlayer.pause();
    showPlayIcon();
    isPlaying = false;
  } else {
    audioPlayer
      .play()
      .then(() => {
        showPauseIcon();
        isPlaying = true;
      })
      .catch((e) => {
        console.log("Error playing audio:", e);
      });
  }
}
function updateProgress() {
  if (audioPlayer.duration) {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressFill.style.width = progress + "%";
    currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    totalTimeEl.textContent = formatTime(audioPlayer.duration);
  }
}
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return mins + ":" + (secs < 10 ? "0" : "") + secs;
}
function seekAudio(e) {
  const rect = progressBar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const newTime = (clickX / rect.width) * audioPlayer.duration;
  audioPlayer.currentTime = newTime;
}
heartBtn.addEventListener("click", triggerRelease);
heartBtn.addEventListener("keydown", triggerRelease);
playPauseBtn.addEventListener("click", togglePlayPause);
progressBar.addEventListener("click", seekAudio);
audioPlayer.addEventListener("timeupdate", updateProgress);
audioPlayer.addEventListener("loadedmetadata", updateProgress);
function releasePhrase() {
  pressCount++;
  counterEl.textContent = `Hearts Pressed: ${pressCount}`;
  heartBtn.classList.add("clicked");
  setTimeout(() => heartBtn.classList.remove("clicked"), 700);
  createParticlesBurst();
  createConfettiBurst();
  createPhrase();
}
function createPhrase() {
  const phraseText = PHRASES[Math.floor(Math.random() * PHRASES.length)];
  const el = document.createElement("div");
  el.className = "phrase shooting";
  el.textContent = phraseText;
  const heartRect = heartBtn.getBoundingClientRect();
  const sceneRect = scene.getBoundingClientRect();
  const startX = heartRect.left + heartRect.width / 2 - sceneRect.left;
  const startY = heartRect.top + heartRect.height / 2 - sceneRect.top;
  el.style.left = startX + "px";
  el.style.top = startY + "px";
  const hue = rand(320, 360);
  el.style.color = `hsl(${hue}, 80%, 80%)`;
  const angle = Math.random() * 120 - 150;
  const shootForce = rand(150, 230);
  const shootX = Math.cos((angle * Math.PI) / 180) * shootForce;
  const shootY = Math.sin((angle * Math.PI) / 180) * shootForce;
  const fallDistance = rand(250, 450);
  const horizontalDrift = rand(-120, 120);
  const finalX = shootX + horizontalDrift;
  const finalY = shootY + fallDistance;
  const initialRotation = rand(-20, 20);
  const finalRotation = initialRotation + rand(-40, 40);
  const duration = rand(4.5, 6.5);
  el.style.setProperty("--shoot-x", shootX + "px");
  el.style.setProperty("--shoot-y", shootY + "px");
  el.style.setProperty("--final-x", finalX + "px");
  el.style.setProperty("--final-y", finalY + "px");
  el.style.setProperty("--rotation", initialRotation + "deg");
  el.style.setProperty("--final-rotation", finalRotation + "deg");
  el.style.setProperty("--duration", duration + "s");
  scene.appendChild(el);
  el.addEventListener("animationend", () => el.remove(), { once: true });
}
function createParticlesBurst() {
  const heartRect = heartBtn.getBoundingClientRect();
  const sceneRect = scene.getBoundingClientRect();
  const centerX = heartRect.left + heartRect.width / 2 - sceneRect.left;
  const centerY = heartRect.top + heartRect.height / 2 - sceneRect.top;
  const particleCount = rand(12, 18);
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle burst";
    particle.style.left = centerX + "px";
    particle.style.top = centerY + "px";
    const angle = Math.random() * 360;
    const distance = rand(60, 100);
    const x = Math.cos((angle * Math.PI) / 180) * distance;
    const y = Math.sin((angle * Math.PI) / 180) * distance;
    particle.style.setProperty("--particle-x", x + "px");
    particle.style.setProperty("--particle-y", y + "px");
    scene.appendChild(particle);
    particle.addEventListener("animationend", () => particle.remove(), {
      once: true,
    });
  }
}
function createConfettiBurst() {
  const heartRect = heartBtn.getBoundingClientRect();
  const sceneRect = scene.getBoundingClientRect();
  const centerX = heartRect.left + heartRect.width / 2 - sceneRect.left;
  const centerY = heartRect.top + heartRect.height / 2 - sceneRect.top;
  const confettiCount = rand(15, 25);
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = centerX + "px";
    confetti.style.top = centerY + "px";
    const colors = ["#ff2b4f", "#ffd6e7", "#ff5f7a", "#ff87a0"];
    confetti.style.setProperty(
      "--color",
      colors[Math.floor(Math.random() * colors.length)]
    );
    confetti.style.setProperty("--size", `${rand(4, 8)}px`);
    const angle = Math.random() * 360;
    const distance = rand(100, 200);
    const x = Math.cos((angle * Math.PI) / 180) * distance;
    const y = Math.sin((angle * Math.PI) / 180) * distance;
    const rot = rand(-720, 720);
    confetti.style.setProperty("--conf-x", x + "px");
    confetti.style.setProperty("--conf-y", y + "px");
    confetti.style.setProperty("--rot", rot + "deg");
    confetti.style.setProperty("--duration", `${rand(1.2, 2)}s`);
    scene.appendChild(confetti);
    confetti.addEventListener("animationend", () => confetti.remove(), {
      once: true,
    });
  }
}
function rand(min, max) {
  return Math.random() * (max - min) + min;
}

// ----------------------------------JS END---------------------------------------->
