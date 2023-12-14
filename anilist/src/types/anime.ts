export interface AnimeActions {
  anime: Media[]
  setAnime: (data: Media[]) => void
}

export interface Total {
  pageInfo: PageInfo
  media: Media[]
}

export interface PageInfo {
  total: number
  currentPage: number
  lastPage: number
  hasNextPage: boolean
  perPage: number
}

export interface Media {
  id: number
  title: MediaTitle
  coverImage: MediaCoverImage
  startDate: MediaStartDate
  endDate: MediaEndDate
  bannerImage: string
  season: string
  seasonYear: number
  description: string
  type: string
  format: string
  status: string
  episodes: number
  duration: number
  chapters: any
  volumes: any
  genres: string[]
  isAdult: boolean
  averageScore: number
  popularity: number
  nextAiringEpisode: NextAiringEpisode
  mediaListEntry: any
  studios: MediaStudios
  relations: MediaRelations
  characterPreview: CharacterPreview
  staffPreview: StaffPreview
  reviewPreview: ReviewPreview
  recommendations: Recommendations
  externalLinks: ExternalLink[]
  streamingEpisodes: StreamingEpisode[]
  trailer: Trailer
  rankings: Ranking[]
  tags: Tag[]
  stats: Stats
  source: string
  hashtag: string
}

export interface MediaTitle {
  userPreferred: string
}

export interface MediaCoverImage {
  extraLarge: string
  large: string
  color: string
}

export interface MediaStartDate {
  year: number
  month: number
  day: number
}

export interface MediaEndDate {
  year: any
  month: any
  day: any
}

export interface NextAiringEpisode {
  airingAt: number
  timeUntilAiring: number
  episode: number
}

export interface MediaStudios {
  edges: StudioEdge[]
}

export interface StudioEdge {
  isMain: boolean
  node: StudioNode
}

export interface StudioNode {
  id: number
  name: string
}

export interface MediaRelations {
  edges: RelationEdge[]
}

export interface RelationEdge {
  id: number
  relationType: string
  node: RelationNode
}

export interface RelationNode {
  id: number
  title: RelationTitle
  format: string
  type: string
  status: string
  bannerImage?: string
  coverImage: RelationCoverImage
}

export interface RelationTitle {
  userPreferred: string
}

export interface RelationCoverImage {
  large: string
}

export interface CharacterPreview {
  edges: CharacterEdge[]
}

export interface CharacterEdge {
  id: number
  role: string
  name: any
  voiceActors: VoiceActor[]
  node: CharacterNode
}

export interface VoiceActor {
  id: number
  name: ActorName
  language: string
  image: ActorImage
}

export interface ActorName {
  userPreferred: string
}

export interface ActorImage {
  large: string
}

export interface CharacterNode {
  id: number
  name: CharacterName
  image: CharacterImage
}

export interface CharacterName {
  userPreferred: string
}

export interface CharacterImage {
  large: string
}

export interface StaffPreview {
  edges: StaffEdge[]
}

export interface StaffEdge {
  id: number
  role: string
  node: StaffNode
}

export interface StaffNode {
  id: number
  name: StaffName
  language: string
  image: StaffImage
}

export interface StaffName {
  userPreferred: string
}

export interface StaffImage {
  large: string
}

export interface ReviewPreview {
  pageInfo: ReviewPageInfo
  nodes: any[]
}

export interface ReviewPageInfo {
  total: number
}

export interface Recommendations {
  pageInfo: RecommendationPageInfo
  nodes: RecommendationNode[]
}

export interface RecommendationPageInfo {
  total: number
}

export interface RecommendationNode {
  id: number
  rating: number
  userRating: string
  mediaRecommendation: RecommendationMedia
  user: User
}

export interface RecommendationMedia {
  id: number
  title: RecommendationTitle
  format: string
  type: string
  status: string
  bannerImage: string
  coverImage: RecommendationCoverImage
}

export interface RecommendationTitle {
  userPreferred: string
}

export interface RecommendationCoverImage {
  large: string
}

export interface User {
  id: number
  name: string
  avatar: UserAvatar
}

export interface UserAvatar {
  large: string
}

export interface ExternalLink {
  id: number
  site: string
  url: string
  type: string
  language?: string
  color?: string
  icon?: string
  notes?: string
  isDisabled: boolean
}

export interface StreamingEpisode {
  site: string
  title: string
  thumbnail: string
  url: string
}

export interface Trailer {
  id: string
  site: string
}

export interface Ranking {
  id: number
  rank: number
  type: string
  format: string
  year?: number
  season?: string
  allTime: boolean
  context: string
}

export interface Tag {
  id: number
  name: string
  description: string
  rank: number
  isMediaSpoiler: boolean
  isGeneralSpoiler: boolean
  userId: number
}

export interface Stats {
  statusDistribution: StatusDistribution[]
  scoreDistribution: ScoreDistribution[]
}

export interface StatusDistribution {
  status: string
  amount: number
}

export interface ScoreDistribution {
  score: number
  amount: number
}
