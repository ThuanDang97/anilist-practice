// icons
import BookIcon from '@assets/icons/BookIcon'
import CharacterIcon from '@assets/icons/CharacterIcon'
import LikeIcon from '@assets/icons/LikeIcon'
import PlayIcon from '@assets/icons/PlayIcon'
import ReviewIcon from '@assets/icons/ReviewIcon'
import StaffIcon from '@assets/icons/StaffIcon'

// constants
import { END_POINTS } from '@constants/endPoints'

export const mockAuthNavbar = [
  {
    label: 'Home',
    link: END_POINTS.HOMEPAGE,
  },
  {
    label: 'Profile',
    link: END_POINTS.PROFILE,
  },
  {
    label: 'Anime List',
    link: END_POINTS.ANIME_LIST,
  },
  {
    label: 'Manga List',
    link: END_POINTS.MANGA_LIST,
  },
  {
    label: 'Browse',
    link: END_POINTS.SEARCH_PAGE,
    subMenu: [
      {
        label: 'Anime',
        link: END_POINTS.SEARCH_PAGE,
        icon: <PlayIcon />,
        subMenu: [
          {
            label: 'Top 100',
            link: `${END_POINTS.SEARCH_PAGE}/top-100`,
          },
          {
            label: 'Trending',
            link: `${END_POINTS.SEARCH_PAGE}/trending`,
          },
          {
            label: 'Top Movies',
            link: `${END_POINTS.SEARCH_PAGE}/top-movies`,
          },
        ],
      },
      {
        label: 'Manga',
        link: END_POINTS.SEARCH_MANGA,
        icon: <BookIcon />,
        subMenu: [
          {
            label: 'Top 100',
            link: `${END_POINTS.SEARCH_MANGA}/top-100`,
          },
          {
            label: 'Trending',
            link: `${END_POINTS.SEARCH_MANGA}/trending`,
          },
          {
            label: 'Top Manhwa',
            link: `${END_POINTS.SEARCH_MANGA}/top-manhwa`,
          },
        ],
      },
    ],
    about: [
      {
        icon: <StaffIcon />,
        label: 'Staff',
        link: END_POINTS.STAFF,
      },
      {
        icon: <CharacterIcon />,
        label: 'Characters',
        link: END_POINTS.CHARACTERS,
      },
      {
        icon: <ReviewIcon />,
        label: 'Reviews',
        link: END_POINTS.REVIEW,
      },
      {
        icon: <LikeIcon />,
        label: 'Recommendations',
        link: END_POINTS.RECOMMENDATIONS,
      },
    ],
  },
  {
    label: 'Forum',
    link: END_POINTS.SEARCH_PAGE,
  },
]

export const mockNavbar = [
  {
    label: 'Search',
    link: END_POINTS.SEARCH_PAGE,
    subMenu: [
      {
        label: 'Anime',
        link: END_POINTS.SEARCH_PAGE,
        icon: <PlayIcon />,
        subMenu: [
          {
            label: 'Top 100',
            link: `${END_POINTS.SEARCH_PAGE}/top-100`,
          },
          {
            label: 'Trending',
            link: `${END_POINTS.SEARCH_PAGE}/trending`,
          },
          {
            label: 'Top Movies',
            link: `${END_POINTS.SEARCH_PAGE}/top-movies`,
          },
        ],
      },
      {
        label: 'Manga',
        link: END_POINTS.SEARCH_MANGA,
        icon: <BookIcon />,
        subMenu: [
          {
            label: 'Top 100',
            link: `${END_POINTS.SEARCH_MANGA}/top-100`,
          },
          {
            label: 'Trending',
            link: `${END_POINTS.SEARCH_MANGA}/trending`,
          },
          {
            label: 'Top Manhwa',
            link: `${END_POINTS.SEARCH_MANGA}/top-manhwa`,
          },
        ],
      },
    ],
    about: [
      {
        icon: <StaffIcon />,
        label: 'Staff',
        link: END_POINTS.STAFF,
      },
      {
        icon: <CharacterIcon />,
        label: 'Characters',
        link: END_POINTS.CHARACTERS,
      },
      {
        icon: <ReviewIcon />,
        label: 'Reviews',
        link: END_POINTS.REVIEW,
      },
      {
        icon: <LikeIcon />,
        label: 'Recommendations',
        link: END_POINTS.RECOMMENDATIONS,
      },
    ],
  },
  {
    label: 'Social',
    link: END_POINTS.SEARCH_PAGE,
  },
  {
    label: 'Forum',
    link: END_POINTS.SEARCH_PAGE,
  },
]
