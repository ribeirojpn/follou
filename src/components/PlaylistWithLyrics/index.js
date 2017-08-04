import React, { Component } from 'react'
import axios from 'axios'

class PlaylistWithLyrics extends Component {
  constructor (props) {
    super(props)
    this.state = {
      playlist: {
        "name": "R&B & Soul",
        "url": "http://open.spotify.com/user/ribeirojpn/playlist/6JIsmgzQImcj0bt4aP2xND",
        "owner": "ribeirojpn",
        "owner_url": "http://open.spotify.com/user/ribeirojpn",
        "tracks": [
            {
                "id": "5Z3GHaZ6ec9bsiI5BenrbY",
                "name": "Young Dumb & Broke",
                "url": "https://open.spotify.com/track/5Z3GHaZ6ec9bsiI5BenrbY",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6LuN9FCkKOj5PcnpouEgny"
                        },
                        "href": "https://api.spotify.com/v1/artists/6LuN9FCkKOj5PcnpouEgny",
                        "id": "6LuN9FCkKOj5PcnpouEgny",
                        "name": "Khalid",
                        "type": "artist",
                        "uri": "spotify:artist:6LuN9FCkKOj5PcnpouEgny"
                    }
                ],
                "lyric_url": "https://genius.com/Khalid-young-dumb-and-broke-lyrics"
            },
            {
                "id": "25YvGDl2zSE0pH8jrMZ6aY",
                "name": "Therapy",
                "url": "https://open.spotify.com/track/25YvGDl2zSE0pH8jrMZ6aY",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6LuN9FCkKOj5PcnpouEgny"
                        },
                        "href": "https://api.spotify.com/v1/artists/6LuN9FCkKOj5PcnpouEgny",
                        "id": "6LuN9FCkKOj5PcnpouEgny",
                        "name": "Khalid",
                        "type": "artist",
                        "uri": "spotify:artist:6LuN9FCkKOj5PcnpouEgny"
                    }
                ],
                "lyric_url": "https://genius.com/Khalid-therapy-lyrics"
            },
            {
                "id": "152lZdxL1OR0ZMW6KquMif",
                "name": "Location",
                "url": "https://open.spotify.com/track/152lZdxL1OR0ZMW6KquMif",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6LuN9FCkKOj5PcnpouEgny"
                        },
                        "href": "https://api.spotify.com/v1/artists/6LuN9FCkKOj5PcnpouEgny",
                        "id": "6LuN9FCkKOj5PcnpouEgny",
                        "name": "Khalid",
                        "type": "artist",
                        "uri": "spotify:artist:6LuN9FCkKOj5PcnpouEgny"
                    }
                ],
                "lyric_url": "https://genius.com/Khalid-location-lyrics"
            },
            {
                "id": "0t9WVX63G7UF1Ha2xQqwk0",
                "name": "I Don't Wanna Waste",
                "url": "https://open.spotify.com/track/0t9WVX63G7UF1Ha2xQqwk0",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2dJTa3mUidZAO9sKcY72tK"
                        },
                        "href": "https://api.spotify.com/v1/artists/2dJTa3mUidZAO9sKcY72tK",
                        "id": "2dJTa3mUidZAO9sKcY72tK",
                        "name": "Ben L'Oncle Soul",
                        "type": "artist",
                        "uri": "spotify:artist:2dJTa3mUidZAO9sKcY72tK"
                    }
                ],
                "lyric_url": "https://genius.com/Ben-loncle-soul-i-dont-wanna-waste-lyrics"
            },
            {
                "id": "248OFOZef6ShXv6DGgbnxU",
                "name": "Saved",
                "url": "https://open.spotify.com/track/248OFOZef6ShXv6DGgbnxU",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6LuN9FCkKOj5PcnpouEgny"
                        },
                        "href": "https://api.spotify.com/v1/artists/6LuN9FCkKOj5PcnpouEgny",
                        "id": "6LuN9FCkKOj5PcnpouEgny",
                        "name": "Khalid",
                        "type": "artist",
                        "uri": "spotify:artist:6LuN9FCkKOj5PcnpouEgny"
                    }
                ],
                "lyric_url": "https://genius.com/Khalid-saved-lyrics"
            },
            {
                "id": "0q75NwOoFiARAVp4EXU4Bs",
                "name": "Love Galore",
                "url": "https://open.spotify.com/track/0q75NwOoFiARAVp4EXU4Bs",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/7tYKF4w9nC0nq9CsPZTHyP"
                        },
                        "href": "https://api.spotify.com/v1/artists/7tYKF4w9nC0nq9CsPZTHyP",
                        "id": "7tYKF4w9nC0nq9CsPZTHyP",
                        "name": "SZA",
                        "type": "artist",
                        "uri": "spotify:artist:7tYKF4w9nC0nq9CsPZTHyP"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY"
                        },
                        "href": "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY",
                        "id": "0Y5tJX1MQlPlqiwlOH1tJY",
                        "name": "Travis Scott",
                        "type": "artist",
                        "uri": "spotify:artist:0Y5tJX1MQlPlqiwlOH1tJY"
                    }
                ],
                "lyric_url": "https://genius.com/Sza-love-galore-lyrics"
            },
            {
                "id": "1E2ePlJmijVSX0o1G9TFgR",
                "name": "Love Galore",
                "url": "https://open.spotify.com/track/1E2ePlJmijVSX0o1G9TFgR",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/7tYKF4w9nC0nq9CsPZTHyP"
                        },
                        "href": "https://api.spotify.com/v1/artists/7tYKF4w9nC0nq9CsPZTHyP",
                        "id": "7tYKF4w9nC0nq9CsPZTHyP",
                        "name": "SZA",
                        "type": "artist",
                        "uri": "spotify:artist:7tYKF4w9nC0nq9CsPZTHyP"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY"
                        },
                        "href": "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY",
                        "id": "0Y5tJX1MQlPlqiwlOH1tJY",
                        "name": "Travis Scott",
                        "type": "artist",
                        "uri": "spotify:artist:0Y5tJX1MQlPlqiwlOH1tJY"
                    }
                ],
                "lyric_url": "https://genius.com/Sza-love-galore-lyrics"
            },
            {
                "id": "7GPstnufSTScEaw9dMxO9H",
                "name": "Childs Play (feat. Chance the Rapper)",
                "url": "https://open.spotify.com/track/7GPstnufSTScEaw9dMxO9H",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/7tYKF4w9nC0nq9CsPZTHyP"
                        },
                        "href": "https://api.spotify.com/v1/artists/7tYKF4w9nC0nq9CsPZTHyP",
                        "id": "7tYKF4w9nC0nq9CsPZTHyP",
                        "name": "SZA",
                        "type": "artist",
                        "uri": "spotify:artist:7tYKF4w9nC0nq9CsPZTHyP"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1anyVhU62p31KFi8MEzkbf"
                        },
                        "href": "https://api.spotify.com/v1/artists/1anyVhU62p31KFi8MEzkbf",
                        "id": "1anyVhU62p31KFi8MEzkbf",
                        "name": "Chance The Rapper",
                        "type": "artist",
                        "uri": "spotify:artist:1anyVhU62p31KFi8MEzkbf"
                    }
                ],
                "lyric_url": "https://genius.com/Sza-childs-play-lyrics"
            },
            {
                "id": "04MRtE1AdEsXD4bRthgIuq",
                "name": "Elle Me Dit",
                "url": "https://open.spotify.com/track/04MRtE1AdEsXD4bRthgIuq",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2dJTa3mUidZAO9sKcY72tK"
                        },
                        "href": "https://api.spotify.com/v1/artists/2dJTa3mUidZAO9sKcY72tK",
                        "id": "2dJTa3mUidZAO9sKcY72tK",
                        "name": "Ben L'Oncle Soul",
                        "type": "artist",
                        "uri": "spotify:artist:2dJTa3mUidZAO9sKcY72tK"
                    }
                ],
                "lyric_url": "https://genius.com/Ben-loncle-soul-elle-me-dit-lyrics"
            },
            {
                "id": "5fQBa4wkmq28xpSLOQ202K",
                "name": "Normal Girl",
                "url": "https://open.spotify.com/track/5fQBa4wkmq28xpSLOQ202K",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/7tYKF4w9nC0nq9CsPZTHyP"
                        },
                        "href": "https://api.spotify.com/v1/artists/7tYKF4w9nC0nq9CsPZTHyP",
                        "id": "7tYKF4w9nC0nq9CsPZTHyP",
                        "name": "SZA",
                        "type": "artist",
                        "uri": "spotify:artist:7tYKF4w9nC0nq9CsPZTHyP"
                    }
                ],
                "lyric_url": "https://genius.com/Sza-normal-girl-lyrics"
            },
            {
                "id": "1z6WtY7X4HQJvzxC4UgkSf",
                "name": "Love On Top",
                "url": "https://open.spotify.com/track/1z6WtY7X4HQJvzxC4UgkSf",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
                        },
                        "href": "https://api.spotify.com/v1/artists/6vWDO969PvNqNYHIOW5v0m",
                        "id": "6vWDO969PvNqNYHIOW5v0m",
                        "name": "Beyoncé",
                        "type": "artist",
                        "uri": "spotify:artist:6vWDO969PvNqNYHIOW5v0m"
                    }
                ],
                "lyric_url": "https://genius.com/Beyonce-love-on-top-lyrics"
            },
            {
                "id": "1G7DcLzPnopdZjLkev0K4e",
                "name": "Irreplaceable",
                "url": "https://open.spotify.com/track/1G7DcLzPnopdZjLkev0K4e",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
                        },
                        "href": "https://api.spotify.com/v1/artists/6vWDO969PvNqNYHIOW5v0m",
                        "id": "6vWDO969PvNqNYHIOW5v0m",
                        "name": "Beyoncé",
                        "type": "artist",
                        "uri": "spotify:artist:6vWDO969PvNqNYHIOW5v0m"
                    }
                ],
                "lyric_url": "https://genius.com/Beyonce-irreplaceable-lyrics"
            },
            {
                "id": "2MfOcbtgz2yTsiznFmVZUN",
                "name": "Halo",
                "url": "https://open.spotify.com/track/2MfOcbtgz2yTsiznFmVZUN",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
                        },
                        "href": "https://api.spotify.com/v1/artists/6vWDO969PvNqNYHIOW5v0m",
                        "id": "6vWDO969PvNqNYHIOW5v0m",
                        "name": "Beyoncé",
                        "type": "artist",
                        "uri": "spotify:artist:6vWDO969PvNqNYHIOW5v0m"
                    }
                ],
                "lyric_url": "https://genius.com/Beyonce-halo-lyrics"
            },
            {
                "id": "6XsT5UGfpaFeHQf5LRIy4W",
                "name": "Me, Myself and I",
                "url": "https://open.spotify.com/track/6XsT5UGfpaFeHQf5LRIy4W",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
                        },
                        "href": "https://api.spotify.com/v1/artists/6vWDO969PvNqNYHIOW5v0m",
                        "id": "6vWDO969PvNqNYHIOW5v0m",
                        "name": "Beyoncé",
                        "type": "artist",
                        "uri": "spotify:artist:6vWDO969PvNqNYHIOW5v0m"
                    }
                ],
                "lyric_url": "https://genius.com/Beyonce-me-myself-and-i-lyrics"
            },
            {
                "id": "6gUbpcQmFvDUbe7a213wlr",
                "name": "Soulman - New English Version",
                "url": "https://open.spotify.com/track/6gUbpcQmFvDUbe7a213wlr",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2dJTa3mUidZAO9sKcY72tK"
                        },
                        "href": "https://api.spotify.com/v1/artists/2dJTa3mUidZAO9sKcY72tK",
                        "id": "2dJTa3mUidZAO9sKcY72tK",
                        "name": "Ben L'Oncle Soul",
                        "type": "artist",
                        "uri": "spotify:artist:2dJTa3mUidZAO9sKcY72tK"
                    }
                ],
                "lyric_url": "https://genius.com/Ben-loncle-soul-soulman-new-english-version-lyrics"
            },
            {
                "id": "6NuRT3MjMhkAiUifsSxfyd",
                "name": "Customer",
                "url": "https://open.spotify.com/track/6NuRT3MjMhkAiUifsSxfyd",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/59NO6KX7wQCG7jGdtH1NtL"
                        },
                        "href": "https://api.spotify.com/v1/artists/59NO6KX7wQCG7jGdtH1NtL",
                        "id": "59NO6KX7wQCG7jGdtH1NtL",
                        "name": "Raheem DeVaughn",
                        "type": "artist",
                        "uri": "spotify:artist:59NO6KX7wQCG7jGdtH1NtL"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2mxe0TnaNL039ysAj51xPQ"
                        },
                        "href": "https://api.spotify.com/v1/artists/2mxe0TnaNL039ysAj51xPQ",
                        "id": "2mxe0TnaNL039ysAj51xPQ",
                        "name": "R. Kelly",
                        "type": "artist",
                        "uri": "spotify:artist:2mxe0TnaNL039ysAj51xPQ"
                    }
                ],
                "lyric_url": "https://genius.com/Raheem-devaughn-customer-lyrics"
            },
            {
                "id": "0IvVQO5Qt6ceyEdzVhfEoG",
                "name": "Temperature's Rising",
                "url": "https://open.spotify.com/track/0IvVQO5Qt6ceyEdzVhfEoG",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/59NO6KX7wQCG7jGdtH1NtL"
                        },
                        "href": "https://api.spotify.com/v1/artists/59NO6KX7wQCG7jGdtH1NtL",
                        "id": "59NO6KX7wQCG7jGdtH1NtL",
                        "name": "Raheem DeVaughn",
                        "type": "artist",
                        "uri": "spotify:artist:59NO6KX7wQCG7jGdtH1NtL"
                    }
                ],
                "lyric_url": "https://genius.com/Raheem-devaughn-temperatures-rising-lyrics"
            },
            {
                "id": "76KTeba6u3LfBL4EsCZaTe",
                "name": "I Care",
                "url": "https://open.spotify.com/track/76KTeba6u3LfBL4EsCZaTe",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
                        },
                        "href": "https://api.spotify.com/v1/artists/6vWDO969PvNqNYHIOW5v0m",
                        "id": "6vWDO969PvNqNYHIOW5v0m",
                        "name": "Beyoncé",
                        "type": "artist",
                        "uri": "spotify:artist:6vWDO969PvNqNYHIOW5v0m"
                    }
                ],
                "lyric_url": "https://genius.com/Beyonce-i-care-lyrics"
            },
            {
                "id": "42qh86p7TLXyumxSHn65kc",
                "name": "Party",
                "url": "https://open.spotify.com/track/42qh86p7TLXyumxSHn65kc",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
                        },
                        "href": "https://api.spotify.com/v1/artists/6vWDO969PvNqNYHIOW5v0m",
                        "id": "6vWDO969PvNqNYHIOW5v0m",
                        "name": "Beyoncé",
                        "type": "artist",
                        "uri": "spotify:artist:6vWDO969PvNqNYHIOW5v0m"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/74V3dE1a51skRkdII8y2C6"
                        },
                        "href": "https://api.spotify.com/v1/artists/74V3dE1a51skRkdII8y2C6",
                        "id": "74V3dE1a51skRkdII8y2C6",
                        "name": "André 3000",
                        "type": "artist",
                        "uri": "spotify:artist:74V3dE1a51skRkdII8y2C6"
                    }
                ],
                "lyric_url": "https://genius.com/Beyonce-party-lyrics"
            },
            {
                "id": "5gZ97EzDIZ98Nz9PbQ4IQc",
                "name": "B.O.B.",
                "url": "https://open.spotify.com/track/5gZ97EzDIZ98Nz9PbQ4IQc",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/59NO6KX7wQCG7jGdtH1NtL"
                        },
                        "href": "https://api.spotify.com/v1/artists/59NO6KX7wQCG7jGdtH1NtL",
                        "id": "59NO6KX7wQCG7jGdtH1NtL",
                        "name": "Raheem DeVaughn",
                        "type": "artist",
                        "uri": "spotify:artist:59NO6KX7wQCG7jGdtH1NtL"
                    }
                ],
                "lyric_url": "https://genius.com/Raheem-devaughn-bob-lyrics"
            },
            {
                "id": "4RMIDsxooqjhLIkxhlWzLa",
                "name": "You",
                "url": "https://open.spotify.com/track/4RMIDsxooqjhLIkxhlWzLa",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/59NO6KX7wQCG7jGdtH1NtL"
                        },
                        "href": "https://api.spotify.com/v1/artists/59NO6KX7wQCG7jGdtH1NtL",
                        "id": "59NO6KX7wQCG7jGdtH1NtL",
                        "name": "Raheem DeVaughn",
                        "type": "artist",
                        "uri": "spotify:artist:59NO6KX7wQCG7jGdtH1NtL"
                    }
                ],
                "lyric_url": "https://genius.com/Raheem-devaughn-you-lyrics"
            },
            {
                "id": "6Nle9hKrkL1wQpwNfEkxjh",
                "name": "Chanel",
                "url": "https://open.spotify.com/track/6Nle9hKrkL1wQpwNfEkxjh",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM"
                        },
                        "href": "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                        "id": "2h93pZq0e7k5yf4dywlkpM",
                        "name": "Frank Ocean",
                        "type": "artist",
                        "uri": "spotify:artist:2h93pZq0e7k5yf4dywlkpM"
                    }
                ],
                "lyric_url": "https://genius.com/Frank-ocean-chanel-lyrics"
            },
            {
                "id": "3GZD6HmiNUhxXYf8Gch723",
                "name": "Lost",
                "url": "https://open.spotify.com/track/3GZD6HmiNUhxXYf8Gch723",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM"
                        },
                        "href": "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                        "id": "2h93pZq0e7k5yf4dywlkpM",
                        "name": "Frank Ocean",
                        "type": "artist",
                        "uri": "spotify:artist:2h93pZq0e7k5yf4dywlkpM"
                    }
                ],
                "lyric_url": "https://genius.com/Frank-ocean-lost-lyrics"
            },
            {
                "id": "0JEqGkvUiMTQmFY6sgL9kg",
                "name": "No One",
                "url": "https://open.spotify.com/track/0JEqGkvUiMTQmFY6sgL9kg",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa"
                        },
                        "href": "https://api.spotify.com/v1/artists/3DiDSECUqqY1AuBP8qtaIa",
                        "id": "3DiDSECUqqY1AuBP8qtaIa",
                        "name": "Alicia Keys",
                        "type": "artist",
                        "uri": "spotify:artist:3DiDSECUqqY1AuBP8qtaIa"
                    }
                ],
                "lyric_url": "https://genius.com/Alicia-keys-no-one-lyrics"
            },
            {
                "id": "5mphdlILgAq3vh1MSvAJTS",
                "name": "Thinkin Bout You",
                "url": "https://open.spotify.com/track/5mphdlILgAq3vh1MSvAJTS",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM"
                        },
                        "href": "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                        "id": "2h93pZq0e7k5yf4dywlkpM",
                        "name": "Frank Ocean",
                        "type": "artist",
                        "uri": "spotify:artist:2h93pZq0e7k5yf4dywlkpM"
                    }
                ],
                "lyric_url": "https://genius.com/Frank-ocean-thinkin-bout-you-lyrics"
            },
            {
                "id": "2y292SsIKqyBnII5TZuhv7",
                "name": "In Common",
                "url": "https://open.spotify.com/track/2y292SsIKqyBnII5TZuhv7",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa"
                        },
                        "href": "https://api.spotify.com/v1/artists/3DiDSECUqqY1AuBP8qtaIa",
                        "id": "3DiDSECUqqY1AuBP8qtaIa",
                        "name": "Alicia Keys",
                        "type": "artist",
                        "uri": "spotify:artist:3DiDSECUqqY1AuBP8qtaIa"
                    }
                ],
                "lyric_url": "https://genius.com/Alicia-keys-in-common-lyrics"
            },
            {
                "id": "3XVBdLihbNbxUwZosxcGuJ",
                "name": "If I Ain't Got You",
                "url": "https://open.spotify.com/track/3XVBdLihbNbxUwZosxcGuJ",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa"
                        },
                        "href": "https://api.spotify.com/v1/artists/3DiDSECUqqY1AuBP8qtaIa",
                        "id": "3DiDSECUqqY1AuBP8qtaIa",
                        "name": "Alicia Keys",
                        "type": "artist",
                        "uri": "spotify:artist:3DiDSECUqqY1AuBP8qtaIa"
                    }
                ],
                "lyric_url": "https://genius.com/Alicia-keys-if-i-aint-got-you-lyrics"
            },
            {
                "id": "5sra5UY6sD658OabHL3QtI",
                "name": "Empire State of Mind, Pt. II (Broken Down)",
                "url": "https://open.spotify.com/track/5sra5UY6sD658OabHL3QtI",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa"
                        },
                        "href": "https://api.spotify.com/v1/artists/3DiDSECUqqY1AuBP8qtaIa",
                        "id": "3DiDSECUqqY1AuBP8qtaIa",
                        "name": "Alicia Keys",
                        "type": "artist",
                        "uri": "spotify:artist:3DiDSECUqqY1AuBP8qtaIa"
                    }
                ],
                "lyric_url": "https://genius.com/Alicia-keys-empire-state-of-mind-pt-ii-lyrics"
            },
            {
                "id": "0VXcKODOtgr80zl3h9kN2Q",
                "name": "Come Home",
                "url": "https://open.spotify.com/track/0VXcKODOtgr80zl3h9kN2Q",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2dJTa3mUidZAO9sKcY72tK"
                        },
                        "href": "https://api.spotify.com/v1/artists/2dJTa3mUidZAO9sKcY72tK",
                        "id": "2dJTa3mUidZAO9sKcY72tK",
                        "name": "Ben L'Oncle Soul",
                        "type": "artist",
                        "uri": "spotify:artist:2dJTa3mUidZAO9sKcY72tK"
                    }
                ],
                "lyric_url": "https://genius.com/Ben-loncle-soul-come-home-lyrics"
            },
            {
                "id": "2q0VexHJirnUPnEOhr2DxK",
                "name": "Biking",
                "url": "https://open.spotify.com/track/2q0VexHJirnUPnEOhr2DxK",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM"
                        },
                        "href": "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                        "id": "2h93pZq0e7k5yf4dywlkpM",
                        "name": "Frank Ocean",
                        "type": "artist",
                        "uri": "spotify:artist:2h93pZq0e7k5yf4dywlkpM"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3nFkdlSjzX9mRTtwJOzDYB"
                        },
                        "href": "https://api.spotify.com/v1/artists/3nFkdlSjzX9mRTtwJOzDYB",
                        "id": "3nFkdlSjzX9mRTtwJOzDYB",
                        "name": "JAY Z",
                        "type": "artist",
                        "uri": "spotify:artist:3nFkdlSjzX9mRTtwJOzDYB"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF"
                        },
                        "href": "https://api.spotify.com/v1/artists/4V8LLVI7PbaPR0K2TGSxFF",
                        "id": "4V8LLVI7PbaPR0K2TGSxFF",
                        "name": "Tyler, The Creator",
                        "type": "artist",
                        "uri": "spotify:artist:4V8LLVI7PbaPR0K2TGSxFF"
                    }
                ],
                "lyric_url": "https://genius.com/Frank-ocean-biking-lyrics"
            },
            {
                "id": "1jFFhbn3IZLP5buAertmU6",
                "name": "Pawn It All",
                "url": "https://open.spotify.com/track/1jFFhbn3IZLP5buAertmU6",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa"
                        },
                        "href": "https://api.spotify.com/v1/artists/3DiDSECUqqY1AuBP8qtaIa",
                        "id": "3DiDSECUqqY1AuBP8qtaIa",
                        "name": "Alicia Keys",
                        "type": "artist",
                        "uri": "spotify:artist:3DiDSECUqqY1AuBP8qtaIa"
                    }
                ],
                "lyric_url": "https://genius.com/Alicia-keys-pawn-it-all-lyrics"
            },
            {
                "id": "13xxBnXOuiBxVxJI458B0i",
                "name": "Unfaithful",
                "url": "https://open.spotify.com/track/13xxBnXOuiBxVxJI458B0i",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5pKCCKE2ajJHZ9KAiaK11H"
                        },
                        "href": "https://api.spotify.com/v1/artists/5pKCCKE2ajJHZ9KAiaK11H",
                        "id": "5pKCCKE2ajJHZ9KAiaK11H",
                        "name": "Rihanna",
                        "type": "artist",
                        "uri": "spotify:artist:5pKCCKE2ajJHZ9KAiaK11H"
                    }
                ],
                "lyric_url": "https://genius.com/Rihanna-unfaithful-lyrics"
            },
            {
                "id": "04aOKLycIl9D8zDDqc6LIA",
                "name": "Stolen Moments",
                "url": "https://open.spotify.com/track/04aOKLycIl9D8zDDqc6LIA",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa"
                        },
                        "href": "https://api.spotify.com/v1/artists/3DiDSECUqqY1AuBP8qtaIa",
                        "id": "3DiDSECUqqY1AuBP8qtaIa",
                        "name": "Alicia Keys",
                        "type": "artist",
                        "uri": "spotify:artist:3DiDSECUqqY1AuBP8qtaIa"
                    }
                ],
                "lyric_url": "https://genius.com/Alicia-keys-stolen-moments-lyrics"
            },
            {
                "id": "0rFZaQ4crlGAzuCjWCQ2xu",
                "name": "Body Party",
                "url": "https://open.spotify.com/track/0rFZaQ4crlGAzuCjWCQ2xu",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2NdeV5rLm47xAvogXrYhJX"
                        },
                        "href": "https://api.spotify.com/v1/artists/2NdeV5rLm47xAvogXrYhJX",
                        "id": "2NdeV5rLm47xAvogXrYhJX",
                        "name": "Ciara",
                        "type": "artist",
                        "uri": "spotify:artist:2NdeV5rLm47xAvogXrYhJX"
                    }
                ],
                "lyric_url": "https://genius.com/Ciara-body-party-lyrics"
            },
            {
                "id": "68vgtRHr7iZHpzGpon6Jlo",
                "name": "My Boo",
                "url": "https://open.spotify.com/track/68vgtRHr7iZHpzGpon6Jlo",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/23zg3TcAtWQy7J6upgbUnj"
                        },
                        "href": "https://api.spotify.com/v1/artists/23zg3TcAtWQy7J6upgbUnj",
                        "id": "23zg3TcAtWQy7J6upgbUnj",
                        "name": "Usher",
                        "type": "artist",
                        "uri": "spotify:artist:23zg3TcAtWQy7J6upgbUnj"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa"
                        },
                        "href": "https://api.spotify.com/v1/artists/3DiDSECUqqY1AuBP8qtaIa",
                        "id": "3DiDSECUqqY1AuBP8qtaIa",
                        "name": "Alicia Keys",
                        "type": "artist",
                        "uri": "spotify:artist:3DiDSECUqqY1AuBP8qtaIa"
                    }
                ],
                "lyric_url": "https://genius.com/Usher-my-boo-lyrics"
            },
            {
                "id": "5GG3knKdxKWrNboRijxeKF",
                "name": "Run Me Dry",
                "url": "https://open.spotify.com/track/5GG3knKdxKWrNboRijxeKF",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2EMAnMvWE2eb56ToJVfCWs"
                        },
                        "href": "https://api.spotify.com/v1/artists/2EMAnMvWE2eb56ToJVfCWs",
                        "id": "2EMAnMvWE2eb56ToJVfCWs",
                        "name": "Bryson Tiller",
                        "type": "artist",
                        "uri": "spotify:artist:2EMAnMvWE2eb56ToJVfCWs"
                    }
                ],
                "lyric_url": "https://genius.com/Bryson-tiller-run-me-dry-lyrics"
            },
            {
                "id": "3kxfsdsCpFgN412fpnW85Y",
                "name": "Redbone",
                "url": "https://open.spotify.com/track/3kxfsdsCpFgN412fpnW85Y",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/73sIBHcqh3Z3NyqHKZ7FOL"
                        },
                        "href": "https://api.spotify.com/v1/artists/73sIBHcqh3Z3NyqHKZ7FOL",
                        "id": "73sIBHcqh3Z3NyqHKZ7FOL",
                        "name": "Childish Gambino",
                        "type": "artist",
                        "uri": "spotify:artist:73sIBHcqh3Z3NyqHKZ7FOL"
                    }
                ],
                "lyric_url": "https://genius.com/Childish-gambino-redbone-lyrics"
            },
            {
                "id": "1qoRqpfQdPf0SftHDo7w4o",
                "name": "Like a Boy",
                "url": "https://open.spotify.com/track/1qoRqpfQdPf0SftHDo7w4o",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2NdeV5rLm47xAvogXrYhJX"
                        },
                        "href": "https://api.spotify.com/v1/artists/2NdeV5rLm47xAvogXrYhJX",
                        "id": "2NdeV5rLm47xAvogXrYhJX",
                        "name": "Ciara",
                        "type": "artist",
                        "uri": "spotify:artist:2NdeV5rLm47xAvogXrYhJX"
                    }
                ],
                "lyric_url": "https://genius.com/Ciara-like-a-boy-lyrics"
            },
            {
                "id": "6Kq3dPaKCOeA1BcU3JgK42",
                "name": "Somethin Tells Me",
                "url": "https://open.spotify.com/track/6Kq3dPaKCOeA1BcU3JgK42",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2EMAnMvWE2eb56ToJVfCWs"
                        },
                        "href": "https://api.spotify.com/v1/artists/2EMAnMvWE2eb56ToJVfCWs",
                        "id": "2EMAnMvWE2eb56ToJVfCWs",
                        "name": "Bryson Tiller",
                        "type": "artist",
                        "uri": "spotify:artist:2EMAnMvWE2eb56ToJVfCWs"
                    }
                ],
                "lyric_url": "https://genius.com/Bryson-tiller-somethin-tells-me-lyrics"
            },
            {
                "id": "4h90qkbnW1Qq6pBhoPvwko",
                "name": "Sidewalks",
                "url": "https://open.spotify.com/track/4h90qkbnW1Qq6pBhoPvwko",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
                        },
                        "href": "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
                        "id": "1Xyo4u8uXC1ZmMpatF05PJ",
                        "name": "The Weeknd",
                        "type": "artist",
                        "uri": "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
                        },
                        "href": "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
                        "id": "2YZyLoL8N0Wb9xBt1NhZWg",
                        "name": "Kendrick Lamar",
                        "type": "artist",
                        "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
                    }
                ],
                "lyric_url": "https://genius.com/The-weeknd-sidewalks-lyrics"
            },
            {
                "id": "0PwKsFzNiOTnAus6fj7zJn",
                "name": "Sober",
                "url": "https://open.spotify.com/track/0PwKsFzNiOTnAus6fj7zJn",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/73sIBHcqh3Z3NyqHKZ7FOL"
                        },
                        "href": "https://api.spotify.com/v1/artists/73sIBHcqh3Z3NyqHKZ7FOL",
                        "id": "73sIBHcqh3Z3NyqHKZ7FOL",
                        "name": "Childish Gambino",
                        "type": "artist",
                        "uri": "spotify:artist:73sIBHcqh3Z3NyqHKZ7FOL"
                    }
                ],
                "lyric_url": "https://genius.com/Childish-gambino-sober-lyrics"
            },
            {
                "id": "5fqt5nfPEgbOuIajbZmkBv",
                "name": "Me and Your Mama",
                "url": "https://open.spotify.com/track/5fqt5nfPEgbOuIajbZmkBv",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/73sIBHcqh3Z3NyqHKZ7FOL"
                        },
                        "href": "https://api.spotify.com/v1/artists/73sIBHcqh3Z3NyqHKZ7FOL",
                        "id": "73sIBHcqh3Z3NyqHKZ7FOL",
                        "name": "Childish Gambino",
                        "type": "artist",
                        "uri": "spotify:artist:73sIBHcqh3Z3NyqHKZ7FOL"
                    }
                ],
                "lyric_url": "https://genius.com/Childish-gambino-me-and-your-mama-lyrics"
            },
            {
                "id": "6Dwtha2FtZFoMEBh5GR2sq",
                "name": "CRZY",
                "url": "https://open.spotify.com/track/6Dwtha2FtZFoMEBh5GR2sq",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0cGUm45nv7Z6M6qdXYQGTX"
                        },
                        "href": "https://api.spotify.com/v1/artists/0cGUm45nv7Z6M6qdXYQGTX",
                        "id": "0cGUm45nv7Z6M6qdXYQGTX",
                        "name": "Kehlani",
                        "type": "artist",
                        "uri": "spotify:artist:0cGUm45nv7Z6M6qdXYQGTX"
                    }
                ],
                "lyric_url": "https://genius.com/Kehlani-crzy-lyrics"
            },
            {
                "id": "1OAh8uOEOvTDqkKFsKksCi",
                "name": "Wild Thoughts",
                "url": "https://open.spotify.com/track/1OAh8uOEOvTDqkKFsKksCi",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP"
                        },
                        "href": "https://api.spotify.com/v1/artists/0QHgL1lAIqAw0HtD7YldmP",
                        "id": "0QHgL1lAIqAw0HtD7YldmP",
                        "name": "DJ Khaled",
                        "type": "artist",
                        "uri": "spotify:artist:0QHgL1lAIqAw0HtD7YldmP"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5pKCCKE2ajJHZ9KAiaK11H"
                        },
                        "href": "https://api.spotify.com/v1/artists/5pKCCKE2ajJHZ9KAiaK11H",
                        "id": "5pKCCKE2ajJHZ9KAiaK11H",
                        "name": "Rihanna",
                        "type": "artist",
                        "uri": "spotify:artist:5pKCCKE2ajJHZ9KAiaK11H"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2EMAnMvWE2eb56ToJVfCWs"
                        },
                        "href": "https://api.spotify.com/v1/artists/2EMAnMvWE2eb56ToJVfCWs",
                        "id": "2EMAnMvWE2eb56ToJVfCWs",
                        "name": "Bryson Tiller",
                        "type": "artist",
                        "uri": "spotify:artist:2EMAnMvWE2eb56ToJVfCWs"
                    }
                ],
                "lyric_url": "https://genius.com/Dj-khaled-wild-thoughts-lyrics"
            },
            {
                "id": "2U7X7mPD4wSp0capCGfpmM",
                "name": "It's Love",
                "url": "https://open.spotify.com/track/2U7X7mPD4wSp0capCGfpmM",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6AVLthptCPhfrxlHadOBJD"
                        },
                        "href": "https://api.spotify.com/v1/artists/6AVLthptCPhfrxlHadOBJD",
                        "id": "6AVLthptCPhfrxlHadOBJD",
                        "name": "Jill Scott",
                        "type": "artist",
                        "uri": "spotify:artist:6AVLthptCPhfrxlHadOBJD"
                    }
                ],
                "lyric_url": "https://genius.com/Jill-scott-its-love-lyrics"
            },
            {
                "id": "4MV4wa3Dke1GMBtk06GMR0",
                "name": "Keep On",
                "url": "https://open.spotify.com/track/4MV4wa3Dke1GMBtk06GMR0",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0cGUm45nv7Z6M6qdXYQGTX"
                        },
                        "href": "https://api.spotify.com/v1/artists/0cGUm45nv7Z6M6qdXYQGTX",
                        "id": "0cGUm45nv7Z6M6qdXYQGTX",
                        "name": "Kehlani",
                        "type": "artist",
                        "uri": "spotify:artist:0cGUm45nv7Z6M6qdXYQGTX"
                    }
                ],
                "lyric_url": "https://genius.com/Kehlani-keep-on-lyrics"
            },
            {
                "id": "6mzaCRuLTRiz1caGOum3zT",
                "name": "The Way (feat. Chance the Rapper)",
                "url": "https://open.spotify.com/track/6mzaCRuLTRiz1caGOum3zT",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0cGUm45nv7Z6M6qdXYQGTX"
                        },
                        "href": "https://api.spotify.com/v1/artists/0cGUm45nv7Z6M6qdXYQGTX",
                        "id": "0cGUm45nv7Z6M6qdXYQGTX",
                        "name": "Kehlani",
                        "type": "artist",
                        "uri": "spotify:artist:0cGUm45nv7Z6M6qdXYQGTX"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1anyVhU62p31KFi8MEzkbf"
                        },
                        "href": "https://api.spotify.com/v1/artists/1anyVhU62p31KFi8MEzkbf",
                        "id": "1anyVhU62p31KFi8MEzkbf",
                        "name": "Chance The Rapper",
                        "type": "artist",
                        "uri": "spotify:artist:1anyVhU62p31KFi8MEzkbf"
                    }
                ],
                "lyric_url": "https://genius.com/Kehlani-the-way-lyrics"
            },
            {
                "id": "1YnjZxBQFmLizsE8wEA9TE",
                "name": "When I Wake Up",
                "url": "https://open.spotify.com/track/1YnjZxBQFmLizsE8wEA9TE",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6AVLthptCPhfrxlHadOBJD"
                        },
                        "href": "https://api.spotify.com/v1/artists/6AVLthptCPhfrxlHadOBJD",
                        "id": "6AVLthptCPhfrxlHadOBJD",
                        "name": "Jill Scott",
                        "type": "artist",
                        "uri": "spotify:artist:6AVLthptCPhfrxlHadOBJD"
                    }
                ],
                "lyric_url": "https://genius.com/Jill-scott-when-i-wake-up-lyrics"
            },
            {
                "id": "2VQc9orzwE6a5qFfy54P6e",
                "name": "Blessings",
                "url": "https://open.spotify.com/track/2VQc9orzwE6a5qFfy54P6e",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1anyVhU62p31KFi8MEzkbf"
                        },
                        "href": "https://api.spotify.com/v1/artists/1anyVhU62p31KFi8MEzkbf",
                        "id": "1anyVhU62p31KFi8MEzkbf",
                        "name": "Chance The Rapper",
                        "type": "artist",
                        "uri": "spotify:artist:1anyVhU62p31KFi8MEzkbf"
                    }
                ],
                "lyric_url": "https://genius.com/Chance-the-rapper-blessings-lyrics"
            },
            {
                "id": "6GXe7h7e3VTbRp8sQ7GLv6",
                "name": "Can't Wait",
                "url": "https://open.spotify.com/track/6GXe7h7e3VTbRp8sQ7GLv6",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6AVLthptCPhfrxlHadOBJD"
                        },
                        "href": "https://api.spotify.com/v1/artists/6AVLthptCPhfrxlHadOBJD",
                        "id": "6AVLthptCPhfrxlHadOBJD",
                        "name": "Jill Scott",
                        "type": "artist",
                        "uri": "spotify:artist:6AVLthptCPhfrxlHadOBJD"
                    }
                ],
                "lyric_url": "https://genius.com/Jill-scott-cant-wait-lyrics"
            },
            {
                "id": "1fpfYMT2RTc5W3Zluq5xVA",
                "name": "Palm Trees",
                "url": "https://open.spotify.com/track/1fpfYMT2RTc5W3Zluq5xVA",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5XenQ7XfcvQdfIbpLEFaKQ"
                        },
                        "href": "https://api.spotify.com/v1/artists/5XenQ7XfcvQdfIbpLEFaKQ",
                        "id": "5XenQ7XfcvQdfIbpLEFaKQ",
                        "name": "GoldLink",
                        "type": "artist",
                        "uri": "spotify:artist:5XenQ7XfcvQdfIbpLEFaKQ"
                    }
                ],
                "lyric_url": "https://genius.com/Goldlink-palm-trees-lyrics"
            },
            {
                "id": "3IU6xbfNZosvTdRrGs8b2u",
                "name": "Reminder",
                "url": "https://open.spotify.com/track/3IU6xbfNZosvTdRrGs8b2u",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
                        },
                        "href": "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
                        "id": "1Xyo4u8uXC1ZmMpatF05PJ",
                        "name": "The Weeknd",
                        "type": "artist",
                        "uri": "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
                    }
                ],
                "lyric_url": "https://genius.com/The-weeknd-reminder-lyrics"
            }
        ]
      }
    }// end this.state
    // this.userPlaylists = this.userPlaylists.bind(this)
  }

  render () {
    const playlistTracks = this.state.playlist.tracks.map((track) =>
      <li>{track.name} - {track.artists[0].name} - <a href={track.lyric_url}>Lyric on Genius</a></li>
    )
    return (
      <div>
        <h1>{this.state.playlist.name}</h1>
        <ul>{playlistTracks}</ul>
      </div>
    )
  }
}

export default PlaylistWithLyrics
