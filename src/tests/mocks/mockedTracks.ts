import { Album, TrackItem } from '../../app/models/searchResponse'

export const MockedTracks: TrackItem[] = [
  {
    album: {
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/7KVJCU4z5L4EUHILL8aMxR',
          },
          href: 'https://api.spotify.com/v1/artists/7KVJCU4z5L4EUHILL8aMxR',
          id: '7KVJCU4z5L4EUHILL8aMxR',
          name: 'Leo Santana',
          type: 'artist',
          uri: 'spotify:artist:7KVJCU4z5L4EUHILL8aMxR',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/7FNnA9vBm6EKceENgCGRMb',
          },
          href: 'https://api.spotify.com/v1/artists/7FNnA9vBm6EKceENgCGRMb',
          id: '7FNnA9vBm6EKceENgCGRMb',
          name: 'Anitta',
          type: 'artist',
          uri: 'spotify:artist:7FNnA9vBm6EKceENgCGRMb',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/4sH660Ggu0Xd9yShQntlmA',
      },
      href: 'https://api.spotify.com/v1/albums/4sH660Ggu0Xd9yShQntlmA',
      id: '4sH660Ggu0Xd9yShQntlmA',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/2cf71e13a7e29cb4cb82259498839e6275244998',
          width: 640,
        },
        {
          height: 300,
          url:
            'https://i.scdn.co/image/4d5c88aac097732c379575f8c0e76027a1e92b51',
          width: 300,
        },
        {
          height: 64,
          url:
            'https://i.scdn.co/image/fac434fffd37eb312cf8e7671dd321e2e30897f4',
          width: 64,
        },
      ],
      name: 'Contatinho (Ao Vivo Em São Paulo / 2019)',
      release_date: '2019-09-06',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:4sH660Ggu0Xd9yShQntlmA',
    } as Album,
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/7KVJCU4z5L4EUHILL8aMxR',
        },
        href: 'https://api.spotify.com/v1/artists/7KVJCU4z5L4EUHILL8aMxR',
        id: '7KVJCU4z5L4EUHILL8aMxR',
        name: 'Leo Santana',
        type: 'artist',
        uri: 'spotify:artist:7KVJCU4z5L4EUHILL8aMxR',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/7FNnA9vBm6EKceENgCGRMb',
        },
        href: 'https://api.spotify.com/v1/artists/7FNnA9vBm6EKceENgCGRMb',
        id: '7FNnA9vBm6EKceENgCGRMb',
        name: 'Anitta',
        type: 'artist',
        uri: 'spotify:artist:7FNnA9vBm6EKceENgCGRMb',
      },
    ],
    disc_number: 1,
    duration_ms: 173229,
    explicit: false,
    external_ids: {
      isrc: 'BRUM71902415',
    },
    external_urls: {
      spotify: 'https://open.spotify.com/track/4RC2nzqaQygxoVQOVv3XlT',
    },
    href: 'https://api.spotify.com/v1/tracks/4RC2nzqaQygxoVQOVv3XlT',
    id: '4RC2nzqaQygxoVQOVv3XlT',
    is_local: false,
    name: 'Contatinho - Ao Vivo Em São Paulo / 2019',
    popularity: 82,
    preview_url: null,
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:4RC2nzqaQygxoVQOVv3XlT',
  },
  {
    album: {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/7FNnA9vBm6EKceENgCGRMb',
          },
          href: 'https://api.spotify.com/v1/artists/7FNnA9vBm6EKceENgCGRMb',
          id: '7FNnA9vBm6EKceENgCGRMb',
          name: 'Anitta',
          type: 'artist',
          uri: 'spotify:artist:7FNnA9vBm6EKceENgCGRMb',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/2BjmOAkaoLqsDQXNvOuzLE',
      },
      href: 'https://api.spotify.com/v1/albums/2BjmOAkaoLqsDQXNvOuzLE',
      id: '2BjmOAkaoLqsDQXNvOuzLE',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/686135bfb81ddd40eb84b817cce5d00f93b56d48',
          width: 640,
        },
        {
          height: 300,
          url:
            'https://i.scdn.co/image/101519f071c95730774fc66b8081043e1a96ca4e',
          width: 300,
        },
        {
          height: 64,
          url:
            'https://i.scdn.co/image/15ca6f4f657cefa6f4b738c60d08c9da9e50adb2',
          width: 64,
        },
      ],
      name: 'Kisses',
      release_date: '2019-04-05',
      release_date_precision: 'day',
      total_tracks: 10,
      type: 'album',
      uri: 'spotify:album:2BjmOAkaoLqsDQXNvOuzLE',
    } as Album,
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/7FNnA9vBm6EKceENgCGRMb',
        },
        href: 'https://api.spotify.com/v1/artists/7FNnA9vBm6EKceENgCGRMb',
        id: '7FNnA9vBm6EKceENgCGRMb',
        name: 'Anitta',
        type: 'artist',
        uri: 'spotify:artist:7FNnA9vBm6EKceENgCGRMb',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/3CDoRporvSjdzTrm99a3gi',
        },
        href: 'https://api.spotify.com/v1/artists/3CDoRporvSjdzTrm99a3gi',
        id: '3CDoRporvSjdzTrm99a3gi',
        name: 'Ludmilla',
        type: 'artist',
        uri: 'spotify:artist:3CDoRporvSjdzTrm99a3gi',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/7hJcb9fa4alzcOq3EaNPoG',
        },
        href: 'https://api.spotify.com/v1/artists/7hJcb9fa4alzcOq3EaNPoG',
        id: '7hJcb9fa4alzcOq3EaNPoG',
        name: 'Snoop Dogg',
        type: 'artist',
        uri: 'spotify:artist:7hJcb9fa4alzcOq3EaNPoG',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/0iZz25uH5PLaShpqq84uYv',
        },
        href: 'https://api.spotify.com/v1/artists/0iZz25uH5PLaShpqq84uYv',
        id: '0iZz25uH5PLaShpqq84uYv',
        name: 'Papatinho',
        type: 'artist',
        uri: 'spotify:artist:0iZz25uH5PLaShpqq84uYv',
      },
    ],
    disc_number: 1,
    duration_ms: 160900,
    explicit: false,
    external_ids: {
      isrc: 'BRWMB1900449',
    },
    external_urls: {
      spotify: 'https://open.spotify.com/track/2H8ETIUEoN9YMf56X66bxd',
    },
    href: 'https://api.spotify.com/v1/tracks/2H8ETIUEoN9YMf56X66bxd',
    id: '2H8ETIUEoN9YMf56X66bxd',
    is_local: false,
    name: 'Onda diferente (feat. Papatinho)',
    popularity: 76,
    preview_url:
      'https://p.scdn.co/mp3-preview/ed723bfee888e01f7b87d9971e18b85c32e9d3e6?cid=8d02705693cc4f9bba40ff3b71ae6f50',
    track_number: 3,
    type: 'track',
    uri: 'spotify:track:2H8ETIUEoN9YMf56X66bxd',
  },
  {
    album: {
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/06lnOkY99sXVW44Y0M4BDP',
          },
          href: 'https://api.spotify.com/v1/artists/06lnOkY99sXVW44Y0M4BDP',
          id: '06lnOkY99sXVW44Y0M4BDP',
          name: 'Vitão',
          type: 'artist',
          uri: 'spotify:artist:06lnOkY99sXVW44Y0M4BDP',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/7FNnA9vBm6EKceENgCGRMb',
          },
          href: 'https://api.spotify.com/v1/artists/7FNnA9vBm6EKceENgCGRMb',
          id: '7FNnA9vBm6EKceENgCGRMb',
          name: 'Anitta',
          type: 'artist',
          uri: 'spotify:artist:7FNnA9vBm6EKceENgCGRMb',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/42UDvCCISDxTvdBLAiJn8j',
      },
      href: 'https://api.spotify.com/v1/albums/42UDvCCISDxTvdBLAiJn8j',
      id: '42UDvCCISDxTvdBLAiJn8j',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/1cca1d4b18d8170bc183d35b15abace4399a1657',
          width: 640,
        },
        {
          height: 300,
          url:
            'https://i.scdn.co/image/b1af058646db637c5d2c3bddbe3d01de0e07b4fd',
          width: 300,
        },
        {
          height: 64,
          url:
            'https://i.scdn.co/image/7b8954639a5ddd3e28e3f676e07b315ff9c18b16',
          width: 64,
        },
      ],
      name: 'Complicado',
      release_date: '2019-10-04',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:42UDvCCISDxTvdBLAiJn8j',
    } as Album,
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/06lnOkY99sXVW44Y0M4BDP',
        },
        href: 'https://api.spotify.com/v1/artists/06lnOkY99sXVW44Y0M4BDP',
        id: '06lnOkY99sXVW44Y0M4BDP',
        name: 'Vitão',
        type: 'artist',
        uri: 'spotify:artist:06lnOkY99sXVW44Y0M4BDP',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/7FNnA9vBm6EKceENgCGRMb',
        },
        href: 'https://api.spotify.com/v1/artists/7FNnA9vBm6EKceENgCGRMb',
        id: '7FNnA9vBm6EKceENgCGRMb',
        name: 'Anitta',
        type: 'artist',
        uri: 'spotify:artist:7FNnA9vBm6EKceENgCGRMb',
      },
    ],
    disc_number: 1,
    duration_ms: 179339,
    explicit: false,
    external_ids: {
      isrc: 'BXHAC1900044',
    },
    external_urls: {
      spotify: 'https://open.spotify.com/track/52vPpP2gEYaBROIS77J38P',
    },
    href: 'https://api.spotify.com/v1/tracks/52vPpP2gEYaBROIS77J38P',
    id: '52vPpP2gEYaBROIS77J38P',
    is_local: false,
    name: 'Complicado',
    popularity: 78,
    preview_url: null,
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:52vPpP2gEYaBROIS77J38P',
  },
  {
    album: {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/6tbjWDEIzxoDsBA1FuhfPW',
          },
          href: 'https://api.spotify.com/v1/artists/6tbjWDEIzxoDsBA1FuhfPW',
          id: '6tbjWDEIzxoDsBA1FuhfPW',
          name: 'Madonna',
          type: 'artist',
          uri: 'spotify:artist:6tbjWDEIzxoDsBA1FuhfPW',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/1G2YEQPXaOj1JZwa3ZiGe8',
      },
      href: 'https://api.spotify.com/v1/albums/1G2YEQPXaOj1JZwa3ZiGe8',
      id: '1G2YEQPXaOj1JZwa3ZiGe8',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/bdf0001736436ea81f6c0a6422c49e271d10ae7d',
          width: 640,
        },
        {
          height: 300,
          url:
            'https://i.scdn.co/image/251bf9d930a3ee15cde5835a9b43a94638f178dc',
          width: 300,
        },
        {
          height: 64,
          url:
            'https://i.scdn.co/image/a439fa2fdce6eec531e9b4cef23d6c83fadc9b5a',
          width: 64,
        },
      ],
      name: 'Madame X (Deluxe)',
      release_date: '2019-06-14',
      release_date_precision: 'day',
      total_tracks: 15,
      type: 'album',
      uri: 'spotify:album:1G2YEQPXaOj1JZwa3ZiGe8',
    } as Album,
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/6tbjWDEIzxoDsBA1FuhfPW',
        },
        href: 'https://api.spotify.com/v1/artists/6tbjWDEIzxoDsBA1FuhfPW',
        id: '6tbjWDEIzxoDsBA1FuhfPW',
        name: 'Madonna',
        type: 'artist',
        uri: 'spotify:artist:6tbjWDEIzxoDsBA1FuhfPW',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/7FNnA9vBm6EKceENgCGRMb',
        },
        href: 'https://api.spotify.com/v1/artists/7FNnA9vBm6EKceENgCGRMb',
        id: '7FNnA9vBm6EKceENgCGRMb',
        name: 'Anitta',
        type: 'artist',
        uri: 'spotify:artist:7FNnA9vBm6EKceENgCGRMb',
      },
    ],
    disc_number: 1,
    duration_ms: 245706,
    explicit: false,
    external_ids: {
      isrc: 'USUG11900861',
    },
    external_urls: {
      spotify: 'https://open.spotify.com/track/2SC14LGDbRWRlyLg9Wupa0',
    },
    href: 'https://api.spotify.com/v1/tracks/2SC14LGDbRWRlyLg9Wupa0',
    id: '2SC14LGDbRWRlyLg9Wupa0',
    is_local: false,
    name: 'Faz Gostoso (feat. Anitta)',
    popularity: 71,
    preview_url: null,
    track_number: 11,
    type: 'track',
    uri: 'spotify:track:2SC14LGDbRWRlyLg9Wupa0',
  },
  {
    album: {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/540vIaP2JwjQb9dm3aArA4',
          },
          href: 'https://api.spotify.com/v1/artists/540vIaP2JwjQb9dm3aArA4',
          id: '540vIaP2JwjQb9dm3aArA4',
          name: 'DJ Snake',
          type: 'artist',
          uri: 'spotify:artist:540vIaP2JwjQb9dm3aArA4',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/2MFS6WG6jnPAgvJpV3PehR',
      },
      href: 'https://api.spotify.com/v1/albums/2MFS6WG6jnPAgvJpV3PehR',
      id: '2MFS6WG6jnPAgvJpV3PehR',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/84146dd617d4c276c716cd35477c93366d7e3f45',
          width: 640,
        },
        {
          height: 300,
          url:
            'https://i.scdn.co/image/f70238b90347adf3f76463c07bce23f5a9dd93c6',
          width: 300,
        },
        {
          height: 64,
          url:
            'https://i.scdn.co/image/0f682cfc23a23509181d78d0e31088e6107928e2',
          width: 64,
        },
      ],
      name: 'Carte Blanche',
      release_date: '2019-07-25',
      release_date_precision: 'day',
      total_tracks: 17,
      type: 'album',
      uri: 'spotify:album:2MFS6WG6jnPAgvJpV3PehR',
    } as Album,
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/540vIaP2JwjQb9dm3aArA4',
        },
        href: 'https://api.spotify.com/v1/artists/540vIaP2JwjQb9dm3aArA4',
        id: '540vIaP2JwjQb9dm3aArA4',
        name: 'DJ Snake',
        type: 'artist',
        uri: 'spotify:artist:540vIaP2JwjQb9dm3aArA4',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/3Isy6kedDrgPYoTS1dazA9',
        },
        href: 'https://api.spotify.com/v1/artists/3Isy6kedDrgPYoTS1dazA9',
        id: '3Isy6kedDrgPYoTS1dazA9',
        name: 'Sean Paul',
        type: 'artist',
        uri: 'spotify:artist:3Isy6kedDrgPYoTS1dazA9',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/7FNnA9vBm6EKceENgCGRMb',
        },
        href: 'https://api.spotify.com/v1/artists/7FNnA9vBm6EKceENgCGRMb',
        id: '7FNnA9vBm6EKceENgCGRMb',
        name: 'Anitta',
        type: 'artist',
        uri: 'spotify:artist:7FNnA9vBm6EKceENgCGRMb',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/0GM7qgcRCORpGnfcN2tCiB',
        },
        href: 'https://api.spotify.com/v1/artists/0GM7qgcRCORpGnfcN2tCiB',
        id: '0GM7qgcRCORpGnfcN2tCiB',
        name: 'Tainy',
        type: 'artist',
        uri: 'spotify:artist:0GM7qgcRCORpGnfcN2tCiB',
      },
    ],
    disc_number: 1,
    duration_ms: 195428,
    explicit: false,
    external_ids: {
      isrc: 'USUG11902391',
    },
    external_urls: {
      spotify: 'https://open.spotify.com/track/660eekzsNZ7sdATvfIsAkR',
    },
    href: 'https://api.spotify.com/v1/tracks/660eekzsNZ7sdATvfIsAkR',
    id: '660eekzsNZ7sdATvfIsAkR',
    is_local: false,
    name: 'Fuego (with Sean Paul & Anitta, feat. Tainy)',
    popularity: 78,
    preview_url: null,
    track_number: 12,
    type: 'track',
    uri: 'spotify:track:660eekzsNZ7sdATvfIsAkR',
  },
  {
    album: {
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/7FNnA9vBm6EKceENgCGRMb',
          },
          href: 'https://api.spotify.com/v1/artists/7FNnA9vBm6EKceENgCGRMb',
          id: '7FNnA9vBm6EKceENgCGRMb',
          name: 'Anitta',
          type: 'artist',
          uri: 'spotify:artist:7FNnA9vBm6EKceENgCGRMb',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1mXAhKnZEdF6rotyyd4GBi',
          },
          href: 'https://api.spotify.com/v1/artists/1mXAhKnZEdF6rotyyd4GBi',
          id: '1mXAhKnZEdF6rotyyd4GBi',
          name: 'MC Kevinho',
          type: 'artist',
          uri: 'spotify:artist:1mXAhKnZEdF6rotyyd4GBi',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/7q0BEiH1SJeiPDW8xQ0v8i',
      },
      href: 'https://api.spotify.com/v1/albums/7q0BEiH1SJeiPDW8xQ0v8i',
      id: '7q0BEiH1SJeiPDW8xQ0v8i',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/ab67616d0000b273b5daf7bbafbda02f5adbed78',
          width: 640,
        },
        {
          height: 300,
          url:
            'https://i.scdn.co/image/ab67616d00001e02b5daf7bbafbda02f5adbed78',
          width: 300,
        },
        {
          height: 64,
          url:
            'https://i.scdn.co/image/ab67616d00004851b5daf7bbafbda02f5adbed78',
          width: 64,
        },
      ],
      name: 'Terremoto',
      release_date: '2019-02-01',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:7q0BEiH1SJeiPDW8xQ0v8i',
    } as Album,
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/7FNnA9vBm6EKceENgCGRMb',
        },
        href: 'https://api.spotify.com/v1/artists/7FNnA9vBm6EKceENgCGRMb',
        id: '7FNnA9vBm6EKceENgCGRMb',
        name: 'Anitta',
        type: 'artist',
        uri: 'spotify:artist:7FNnA9vBm6EKceENgCGRMb',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/1mXAhKnZEdF6rotyyd4GBi',
        },
        href: 'https://api.spotify.com/v1/artists/1mXAhKnZEdF6rotyyd4GBi',
        id: '1mXAhKnZEdF6rotyyd4GBi',
        name: 'MC Kevinho',
        type: 'artist',
        uri: 'spotify:artist:1mXAhKnZEdF6rotyyd4GBi',
      },
    ],
    disc_number: 1,
    duration_ms: 146276,
    explicit: false,
    external_ids: {
      isrc: 'BRWMB1900035',
    },
    external_urls: {
      spotify: 'https://open.spotify.com/track/7G2XZhDNHo7SSDWSVxC0UT',
    },
    href: 'https://api.spotify.com/v1/tracks/7G2XZhDNHo7SSDWSVxC0UT',
    id: '7G2XZhDNHo7SSDWSVxC0UT',
    is_local: false,
    name: 'Terremoto',
    popularity: 72,
    preview_url:
      'https://p.scdn.co/mp3-preview/2452b7b57fa92e18d081a9c802adba8b736b0c9a?cid=8d02705693cc4f9bba40ff3b71ae6f50',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:7G2XZhDNHo7SSDWSVxC0UT',
  },
  {
    album: {
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/0haZhu4fFKt0Ag94kZDiz2',
          },
          href: 'https://api.spotify.com/v1/artists/0haZhu4fFKt0Ag94kZDiz2',
          id: '0haZhu4fFKt0Ag94kZDiz2',
          name: 'Sofia Reyes',
          type: 'artist',
          uri: 'spotify:artist:0haZhu4fFKt0Ag94kZDiz2',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5CCwRZC6euC8Odo6y9X8jr',
          },
          href: 'https://api.spotify.com/v1/artists/5CCwRZC6euC8Odo6y9X8jr',
          id: '5CCwRZC6euC8Odo6y9X8jr',
          name: 'Rita Ora',
          type: 'artist',
          uri: 'spotify:artist:5CCwRZC6euC8Odo6y9X8jr',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/7FNnA9vBm6EKceENgCGRMb',
          },
          href: 'https://api.spotify.com/v1/artists/7FNnA9vBm6EKceENgCGRMb',
          id: '7FNnA9vBm6EKceENgCGRMb',
          name: 'Anitta',
          type: 'artist',
          uri: 'spotify:artist:7FNnA9vBm6EKceENgCGRMb',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/2yN1kxrx1Z1CHO5VMdO2Yk',
      },
      href: 'https://api.spotify.com/v1/albums/2yN1kxrx1Z1CHO5VMdO2Yk',
      id: '2yN1kxrx1Z1CHO5VMdO2Yk',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/ab67616d0000b273d81e14b41a67f819fc7241cf',
          width: 640,
        },
        {
          height: 300,
          url:
            'https://i.scdn.co/image/ab67616d00001e02d81e14b41a67f819fc7241cf',
          width: 300,
        },
        {
          height: 64,
          url:
            'https://i.scdn.co/image/ab67616d00004851d81e14b41a67f819fc7241cf',
          width: 64,
        },
      ],
      name: 'R.I.P. (feat. Rita Ora & Anitta)',
      release_date: '2019-03-15',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:2yN1kxrx1Z1CHO5VMdO2Yk',
    } as Album,
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/0haZhu4fFKt0Ag94kZDiz2',
        },
        href: 'https://api.spotify.com/v1/artists/0haZhu4fFKt0Ag94kZDiz2',
        id: '0haZhu4fFKt0Ag94kZDiz2',
        name: 'Sofia Reyes',
        type: 'artist',
        uri: 'spotify:artist:0haZhu4fFKt0Ag94kZDiz2',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/5CCwRZC6euC8Odo6y9X8jr',
        },
        href: 'https://api.spotify.com/v1/artists/5CCwRZC6euC8Odo6y9X8jr',
        id: '5CCwRZC6euC8Odo6y9X8jr',
        name: 'Rita Ora',
        type: 'artist',
        uri: 'spotify:artist:5CCwRZC6euC8Odo6y9X8jr',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/7FNnA9vBm6EKceENgCGRMb',
        },
        href: 'https://api.spotify.com/v1/artists/7FNnA9vBm6EKceENgCGRMb',
        id: '7FNnA9vBm6EKceENgCGRMb',
        name: 'Anitta',
        type: 'artist',
        uri: 'spotify:artist:7FNnA9vBm6EKceENgCGRMb',
      },
    ],
    disc_number: 1,
    duration_ms: 187200,
    explicit: true,
    external_ids: {
      isrc: 'USWL11900037',
    },
    external_urls: {
      spotify: 'https://open.spotify.com/track/6JqpFboOH2bq9pzaYbkKBn',
    },
    href: 'https://api.spotify.com/v1/tracks/6JqpFboOH2bq9pzaYbkKBn',
    id: '6JqpFboOH2bq9pzaYbkKBn',
    is_local: false,
    name: 'R.I.P. (feat. Rita Ora & Anitta)',
    popularity: 79,
    preview_url:
      'https://p.scdn.co/mp3-preview/2613c3e23661682d68a3e8eee0281c8a0bb5c917?cid=8d02705693cc4f9bba40ff3b71ae6f50',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:6JqpFboOH2bq9pzaYbkKBn',
  },
  {
    album: {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/7hJcb9fa4alzcOq3EaNPoG',
          },
          href: 'https://api.spotify.com/v1/artists/7hJcb9fa4alzcOq3EaNPoG',
          id: '7hJcb9fa4alzcOq3EaNPoG',
          name: 'Snoop Dogg',
          type: 'artist',
          uri: 'spotify:artist:7hJcb9fa4alzcOq3EaNPoG',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/0a8d4BfLP3XEiuZZTWxxEQ',
      },
      href: 'https://api.spotify.com/v1/albums/0a8d4BfLP3XEiuZZTWxxEQ',
      id: '0a8d4BfLP3XEiuZZTWxxEQ',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/ab67616d0000b273d900a0caa82b1e56836de85d',
          width: 640,
        },
        {
          height: 300,
          url:
            'https://i.scdn.co/image/ab67616d00001e02d900a0caa82b1e56836de85d',
          width: 300,
        },
        {
          height: 64,
          url:
            'https://i.scdn.co/image/ab67616d00004851d900a0caa82b1e56836de85d',
          width: 64,
        },
      ],
      name: 'I Wanna Thank Me',
      release_date: '2019-08-16',
      release_date_precision: 'day',
      total_tracks: 22,
      type: 'album',
      uri: 'spotify:album:0a8d4BfLP3XEiuZZTWxxEQ',
    } as Album,
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/7hJcb9fa4alzcOq3EaNPoG',
        },
        href: 'https://api.spotify.com/v1/artists/7hJcb9fa4alzcOq3EaNPoG',
        id: '7hJcb9fa4alzcOq3EaNPoG',
        name: 'Snoop Dogg',
        type: 'artist',
        uri: 'spotify:artist:7hJcb9fa4alzcOq3EaNPoG',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/7FNnA9vBm6EKceENgCGRMb',
        },
        href: 'https://api.spotify.com/v1/artists/7FNnA9vBm6EKceENgCGRMb',
        id: '7FNnA9vBm6EKceENgCGRMb',
        name: 'Anitta',
        type: 'artist',
        uri: 'spotify:artist:7FNnA9vBm6EKceENgCGRMb',
      },
    ],
    disc_number: 1,
    duration_ms: 134928,
    explicit: true,
    external_ids: {
      isrc: 'USUYG1266891',
    },
    external_urls: {
      spotify: 'https://open.spotify.com/track/3GRYbb9KX2iGeLMur4FUVs',
    },
    href: 'https://api.spotify.com/v1/tracks/3GRYbb9KX2iGeLMur4FUVs',
    id: '3GRYbb9KX2iGeLMur4FUVs',
    is_local: false,
    name: 'Little Square UBitchU (feat. Anitta)',
    popularity: 67,
    preview_url:
      'https://p.scdn.co/mp3-preview/f79ec03d25f4e07fc1e9359e9a1ae3a90ce6fca9?cid=8d02705693cc4f9bba40ff3b71ae6f50',
    track_number: 20,
    type: 'track',
    uri: 'spotify:track:3GRYbb9KX2iGeLMur4FUVs',
  },
  {
    album: {
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5bzWtCkjIAMgN93gLt56SO',
          },
          href: 'https://api.spotify.com/v1/artists/5bzWtCkjIAMgN93gLt56SO',
          id: '5bzWtCkjIAMgN93gLt56SO',
          name: 'Tropkillaz',
          type: 'artist',
          uri: 'spotify:artist:5bzWtCkjIAMgN93gLt56SO',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1vyhD5VmyZ7KMfW5gqLgo5',
          },
          href: 'https://api.spotify.com/v1/artists/1vyhD5VmyZ7KMfW5gqLgo5',
          id: '1vyhD5VmyZ7KMfW5gqLgo5',
          name: 'J Balvin',
          type: 'artist',
          uri: 'spotify:artist:1vyhD5VmyZ7KMfW5gqLgo5',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/7FNnA9vBm6EKceENgCGRMb',
          },
          href: 'https://api.spotify.com/v1/artists/7FNnA9vBm6EKceENgCGRMb',
          id: '7FNnA9vBm6EKceENgCGRMb',
          name: 'Anitta',
          type: 'artist',
          uri: 'spotify:artist:7FNnA9vBm6EKceENgCGRMb',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/3p5oLCW4wY9u1TBRiLT1HD',
      },
      href: 'https://api.spotify.com/v1/albums/3p5oLCW4wY9u1TBRiLT1HD',
      id: '3p5oLCW4wY9u1TBRiLT1HD',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/ab67616d0000b2734bf89286d7a6aeb99ee762e5',
          width: 640,
        },
        {
          height: 300,
          url:
            'https://i.scdn.co/image/ab67616d00001e024bf89286d7a6aeb99ee762e5',
          width: 300,
        },
        {
          height: 64,
          url:
            'https://i.scdn.co/image/ab67616d000048514bf89286d7a6aeb99ee762e5',
          width: 64,
        },
      ],
      name: 'Bola Rebola',
      release_date: '2019-02-22',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:3p5oLCW4wY9u1TBRiLT1HD',
    } as Album,
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/5bzWtCkjIAMgN93gLt56SO',
        },
        href: 'https://api.spotify.com/v1/artists/5bzWtCkjIAMgN93gLt56SO',
        id: '5bzWtCkjIAMgN93gLt56SO',
        name: 'Tropkillaz',
        type: 'artist',
        uri: 'spotify:artist:5bzWtCkjIAMgN93gLt56SO',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/1vyhD5VmyZ7KMfW5gqLgo5',
        },
        href: 'https://api.spotify.com/v1/artists/1vyhD5VmyZ7KMfW5gqLgo5',
        id: '1vyhD5VmyZ7KMfW5gqLgo5',
        name: 'J Balvin',
        type: 'artist',
        uri: 'spotify:artist:1vyhD5VmyZ7KMfW5gqLgo5',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/7FNnA9vBm6EKceENgCGRMb',
        },
        href: 'https://api.spotify.com/v1/artists/7FNnA9vBm6EKceENgCGRMb',
        id: '7FNnA9vBm6EKceENgCGRMb',
        name: 'Anitta',
        type: 'artist',
        uri: 'spotify:artist:7FNnA9vBm6EKceENgCGRMb',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/76Xa625geVw0Q7BdyxNjA2',
        },
        href: 'https://api.spotify.com/v1/artists/76Xa625geVw0Q7BdyxNjA2',
        id: '76Xa625geVw0Q7BdyxNjA2',
        name: 'Mc Zaac',
        type: 'artist',
        uri: 'spotify:artist:76Xa625geVw0Q7BdyxNjA2',
      },
    ],
    disc_number: 1,
    duration_ms: 193440,
    explicit: false,
    external_ids: {
      isrc: 'BXS381900002',
    },
    external_urls: {
      spotify: 'https://open.spotify.com/track/1OUPXna2MCgAt3VNmXJBtg',
    },
    href: 'https://api.spotify.com/v1/tracks/1OUPXna2MCgAt3VNmXJBtg',
    id: '1OUPXna2MCgAt3VNmXJBtg',
    is_local: false,
    name: 'Bola Rebola',
    popularity: 78,
    preview_url: null,
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:1OUPXna2MCgAt3VNmXJBtg',
  },
]
