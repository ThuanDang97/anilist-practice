// types
import { ListAnime } from '@type/anime'

// utils
import { ConvertDateTime } from './convertDate'

export const TransformerData = (listAnime: ListAnime[]) => {
  return listAnime.map((anime) => {
    const {
      id,
      title,
      coverImage,
      startDate,
      endDate,
      bannerImage,
      season,
      seasonYear,
      description,
      type,
      format,
      status,
      episodes,
      duration,
      chapters,
      volumes,
      genres,
      isAdult,
      averageScore,
      popularity,
      nextAiringEpisode,
      mediaListEntry,
      studios,
    } = anime
    return {
      id,
      title: {
        userPreferred: title.userPreferred || '',
      },
      coverImage: {
        large: coverImage.large,
        extraLarge: coverImage.extraLarge,
        color: coverImage.color || '#3577ff',
      },
      startDate: ConvertDateTime(startDate),
      endDate: ConvertDateTime(endDate),
      bannerImage: bannerImage || '',
      season: season || '',
      seasonYear: seasonYear || 0,
      description: description || '',
      type: type || '',
      format: format || '',
      status: status || '',
      episodes: episodes || 0,
      duration: duration || 0,
      chapters: chapters || '',
      volumes: volumes || '',
      genres: genres || [],
      isAdult: isAdult || false,
      averageScore: averageScore || 0,
      popularity: popularity || 0,
      nextAiringEpisode: {
        airingAt: nextAiringEpisode?.airingAt || 0,
        timeUntilAiring: nextAiringEpisode?.timeUntilAiring || 0,
        episode: nextAiringEpisode?.episode || 0,
      },
      mediaListEntry: {
        id: mediaListEntry?.id || 0,
        status: mediaListEntry?.status || '',
      },
      studios: studios || [],
    }
  })
}
