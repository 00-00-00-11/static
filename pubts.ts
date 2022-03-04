/**
 * This file was auto-generated by openapi-to-ts. Do not change it manually!
 */

/**
 * Represents a "regular" API response on Fates List CRUD endpoints
  * 
  * You can check for success using the done boolean and reason using the reason attribute
 */
export interface APIResponse {
  done: boolean;
  reason?: string;
}

export interface AddBotInfo {
  perm: number;
  tags: Array<string>;
  features: Array<string>;
}

/**
 * Handle badges
 */
export interface Badge {
  id: string;
  name: string;
  description: string;
  image: string;
  staff?: boolean;
  cert_dev?: boolean;
  bot_dev?: boolean;
  support_server_member?: boolean;
  everyone?: boolean;
}

/**
 * Information given by the API for pagination
 */
export interface BasePager {
  total_count: number;
  total_pages: number;
  per_page: number;
  from: number;
  to: number;
}

/**
 * Represents a base user class on Fates List.
 */
export interface BaseUser {
  id?: string;
  username?: string;
  avatar?: string;
  disc?: string;
  status?: Status;
  bot?: boolean;
}

/**
 * Represents a bot on Fates List
 */
export interface Bot {
  user?: BaseUser;
  description?: string;
  tags: Array<string>;
  created_at: string;
  last_stats_post?: string;
  long_description_type?: LongDescType;
  long_description?: string;
  guild_count: number;
  shard_count?: number;
  user_count: number;
  shards?: Array<number>;
  prefix?: string;
  library: string;
  invite?: string;
  invite_link: string;
  invite_amount: number;
  owners?: BotOwners;
  features: Array<BotFeature>;
  state: BotState;
  website?: string;
  support?: string;
  github?: string;
  css?: string;
  votes: number;
  total_votes: number;
  vanity: string;
  donate?: string;
  privacy_policy?: string;
  nsfw: boolean;
  banner_card?: string;
  banner_page?: string;
  keep_banner_decor?: boolean;
  client_id?: string;
  flags?: Array<number>;
  action_logs?: Array<any>;
  uptime_checks_total?: number;
  uptime_checks_failed?: number;
}

export interface BotAppeal {
  appeal: string;
}

export interface BotCommand {
  cmd_type: CommandType;
  cmd_groups?: Array<string>;
  cmd_name: string;
  vote_locked: boolean;
  description: string;
  args?: Array<any>;
  examples?: Array<any>;
  premium_only?: boolean;
  notes?: Array<any>;
  doc_link?: string;
}

export interface BotCommandDelete {
  ids?: Array<string>;
  names?: Array<string>;
  nuke?: boolean;
}

export interface BotCommandWithId {
  cmd_type: CommandType;
  cmd_groups?: Array<string>;
  cmd_name: string;
  vote_locked: boolean;
  description: string;
  args?: Array<any>;
  examples?: Array<any>;
  premium_only?: boolean;
  notes?: Array<any>;
  doc_link?: string;
  id: string;
}

export interface BotCommands {
  commands: Array<BotCommand>;
}

/**
 * Represents all of the features the list supports and information 
  * about them. Keys indicate the feature id and value is 
  * feature information. The value should but may 
  * not always have a name, type and a description keys in the json
 */
export interface BotFeature {
  name: string;
  type: string;
  description: string;
}

export interface BotIndex {
  tags_fixed: FLTags;
  top_voted: BotPartialList;
  certified_bots: BotPartialList;
  new_bots: BotPartialList;
  features?: BotFeatures;
}

export interface BotListStats {
  uptime: number;
  pid: number;
  up: boolean;
  server_uptime: number;
  bot_count: number;
  bot_count_total: number;
  workers: Array<number>;
}

export interface BotLogs {
  bot_id: string;
  action: number;
  action_time: string;
  context?: any;
}

/**
 * Notes:
  * 
  * - extra_owners must be a list of strings where the strings can be made a integer
 */
export interface BotMeta {
  client_id?: string;
  prefix?: string;
  library: string;
  invite?: string;
  website?: string;
  description: string;
  banner_card?: string;
  banner_page?: string;
  keep_banner_decor: boolean;
  extra_owners: Array<string>;
  support?: string;
  long_description: string;
  css?: string;
  long_description_type: LongDescType;
  nsfw: boolean;
  donate?: string;
  privacy_policy?: string;
  github?: string;
  webhook_type?: number;
  webhook?: string;
  webhook_secret?: string;
  vanity: string;
  features?: Array<string>;
  tags: Array<string>;
  system_bot?: boolean;
}

export interface BotOwner {
  user: BaseUser;
  main: boolean;
}

export interface BotOwners {
  botOwner?: BotOwner;
}

/**
 * Represents a bot pack on fates list
 */
export interface BotPack {
  name: string;
  description: string;
  icon?: string;
  banner?: string;
  bots: Array<string>;
  id: string;
  created_at: string;
  owner: BaseUser;
  resolved_bots: Array<PackBot>;
}

/**
 * Represents a partial bot pack on fates list 
  * (a bot pack without a id, owner or created_at)
 */
export interface BotPackPartial {
  name: string;
  description: string;
  icon?: string;
  banner?: string;
  bots: Array<string>;
}

export interface BotPartial {
  description: string;
  guild_count: number;
  banner?: string;
  state: BotState;
  nsfw: boolean;
  votes: number;
  user: BaseUser;
}

export interface BotPartialList {
  botPartial?: BotPartial;
}

/**
 * Reperesents a bots promotion
 */
export interface BotPromotion {
  title: string;
  info: string;
  css?: string;
  type: PromotionType;
}

/**
 * This is a list of bot promotions. This should be handled by your library
 */
export interface BotPromotionList {
  botPromotion?: BotPromotion;
}

/**
 * Represents a bot promotion response model. This should be handled by your library
 */
export interface BotPromotions {
  promotions: BotPromotionList;
}

export interface BotQueueGet {
  bots?: BotQueueList;
}

export interface BotQueueList {
  partialBotQueue?: PartialBotQueue;
}

/**
 * Represents a random bot on Fates List
  * 
  * **Note:** Inline user fields are deprecated, use user instead
 */
export interface BotRandom {
  bot_id: string;
  description: string;
  banner_card?: string;
  state: number;
  username: string;
  avatar: string;
  guild_count: number;
  votes: number;
  formatted: GCVFormat;
  user: BaseUser;
}

export interface BotResource {
  resource_title: string;
  resource_link: string;
  resource_description: string;
}

export interface BotResourceDelete {
  ids?: Array<string>;
  titles?: Array<string>;
  nuke?: boolean;
}

export interface BotResources {
  resources: Array<BotResource>;
}

export interface BotReview {
  id: string;
  reply: boolean;
  user_id: string;
  star_rating: number;
  review: string;
  review_upvotes: Array<any>;
  review_downvotes: Array<any>;
  flagged: boolean;
  epoch: Array<any>;
  time_past: string;
  user: BaseUser;
  replies?: BotReviewList;
}

/**
 * Represents a list of bot reviews on Fates List
 */
export interface BotReviewList {
  botReview?: BotReview;
}

/**
 * Note that the reply and id fields are not honored in edit bot
 */
export interface BotReviewPartial {
  id?: string;
  review: string;
  star_rating: number;
  reply?: boolean;
}

/**
 * Partial bot review with extended fields specific for adding reviews such as target_type and target_id
 */
export interface BotReviewPartialExt {
  id?: string;
  review: string;
  star_rating: number;
  reply?: boolean;
  target_type: ReviewType;
  target_id: string;
}

export interface BotReviewVote {
  upvote: boolean;
}

/**
 * Represents bot reviews and average stars of a bot on Fates List
 */
export interface BotReviews {
  reviews: BotReviewList;
  average_stars: number;
  pager: BasePager;
}

export interface BotStats {
  guild_count: number;
  shard_count?: number;
  shards?: Array<number>;
  user_count?: number;
}

export interface BotStatsFull {
  bot_amount: number;
  denied_amount: number;
  banned_amount: number;
  certified: BotPartialList;
  queue: BotPartialList;
  under_review: BotPartialList;
  denied?: BotPartialList;
  banned?: BotPartialList;
}

export interface BotVanity {
  type: VanityType;
  redirect: string;
}

/**
 * vts = Vote Timestamps
 */
export interface BotVoteCheck {
  votes: number;
  voted: boolean;
  vote_right_now?: boolean;
  vote_epoch?: number;
  time_to_vote?: number;
  vts?: Array<any>;
}

export interface FLTag {
  name: string;
  iconify_data: string;
  id: string;
  owner_guild?: string;
}

export interface FLTags {
  fLTag?: FLTag;
}

export interface FilteredBotOwner {
  user_id: string;
  main: boolean;
}

export interface FilteredBotTag {
  tag: string;
}

/**
 * Represents a formatted for client data
 */
export interface GCVFormat {
  guild_count: string;
  votes: string;
}

/**
 * Represents a server/guild on Fates List
 */
export interface Guild {
  invite_channel?: string;
  user: BaseUser;
  description?: string;
  tags: Array<any>;
  long_description_type?: LongDescType;
  long_description?: string;
  guild_count: number;
  invite_amount: number;
  total_votes: number;
  user_whitelist?: Array<string>;
  user_blacklist?: Array<string>;
  state: BotState;
  website?: string;
  css?: string;
  votes: number;
  vanity?: string;
  nsfw: boolean;
  banner_card?: string;
  banner_page?: string;
  keep_banner_decor?: boolean;
}

/**
 * Represents a random server/guild on Fates List
 */
export interface GuildRandom {
  guild_id: string;
  description: string;
  banner_card?: string;
  state: number;
  username: string;
  avatar: string;
  guild_count: number;
  votes: number;
  formatted: GCVFormat;
}

/**
 * Represents a "regular" API response on Fates List CRUD endpoints
  * 
  * You can check for success using the done boolean and reason using the reason attribute
 */
export interface IDResponse {
  done: boolean;
  reason?: string;
  id: string;
}

export interface IsStaff {
  staff: boolean;
  perm: number;
  sm: StaffRole;
}

export interface Login {
  code: string;
  scopes: Array<string>;
}

export interface LoginBan {
  type: string;
  desc: string;
}

/**
 * Represents a "regular" API response on Fates List CRUD endpoints
  * 
  * You can check for success using the done boolean and reason using the reason attribute
 */
export interface LoginResponse {
  done: boolean;
  reason?: string;
  ban?: LoginBan;
  banned?: boolean;
}

/**
 * Represents a "regular" API response on Fates List CRUD endpoints
  * 
  * You can check for success using the done boolean and reason using the reason attribute
 */
export interface OAuthInfo {
  done: boolean;
  reason?: string;
  url?: string;
  state: string;
}

export interface OwnershipTransfer {
  new_owner: string;
}

/**
 * Represents a base user class on Fates List.
 */
export interface PackBot {
  id?: string;
  username?: string;
  avatar?: string;
  disc?: string;
  status?: Status;
  bot?: boolean;
  description: string;
}

export interface PartialBotQueue {
  user?: BaseUser;
  prefix?: string;
  invite: string;
  description: string;
  state: BotState;
  guild_count: number;
  votes: number;
  long_description: string;
  website?: string;
  support?: string;
  owners: Array<FilteredBotOwner>;
  tags: Array<FilteredBotTag>;
}

export interface Partner {
  id: string;
  name: string;
  owner: string;
  image: string;
  description: string;
  links: PartnerLinks;
}

export interface PartnerLinks {
  discord: string;
  website: string;
}

export interface Partners {
  partners: Array<Partner>;
  icons: PartnerLinks;
}

export interface Profile {
  bots: Array<ProfileBot>;
  approved_bots: Array<ProfileBot>;
  certified_bots: Array<ProfileBot>;
  profile: ProfileData;
  site_lang?: string;
  user: BaseUser;
  bot_logs?: Array<any>;
  packs: Array<BotPack>;
}

/**
 * A bot attached to a users profile
 */
export interface ProfileBot {
  bot_id: number;
  avatar?: string;
  description: string;
  invite?: string;
  prefix?: string;
  banner?: string;
  state: BotState;
  votes: number;
  guild_count: number;
  nsfw: boolean;
  user?: BaseUser;
}

/**
 * Misc data about a user
 */
export interface ProfileData {
  badges: Array<Badge>;
  description?: string;
  user_css?: string;
  profile_css?: string;
  vote_reminder_channel?: string;
  js_allowed: boolean;
  bot_developer: boolean;
  certified_developer: boolean;
  state: UserState;
  bot_logs?: Array<BotLogs>;
}

export interface Search {
  bots?: Array<any>;
  servers?: Array<any>;
  profiles?: Array<any>;
  packs?: Array<BotPack>;
  tags: any;
  features?: BotFeatures;
}

/**
 * A request to create a new staff application.
  * 
  * Must be a dict of question id to the answer given
 */
export interface StaffAppCreate {
  answers: any;
}

/**
 * A question for a staff application.
 */
export interface StaffAppQuestion {
  id: string;
  title: string;
  question: string;
  answer?: string;
  minlength?: number;
  maxlength?: number;
}

/**
 * A list of questions for a staff application.
 */
export interface StaffAppQuestions {
  questions: Array<StaffAppQuestion>;
}

/**
 * **Either fname (friendly name) or name may be defined.
  * Check for both**
 */
export interface StaffRole {
  id: string;
  staff_id: string;
  perm: number;
  name?: string;
  fname?: string;
}

export interface TagSearch {
  search_res: Array<any>;
  tags_fixed: FLTags;
}

export interface Troubleshoot {
  req_user_agent?: string;
  pid: number;
  cf_ip?: string;
  user?: BaseUser;
}

/**
 * Setting field to null and/or omitting it means no change to said field.
 */
export interface UpdateUserPreferences {
  description?: string;
  profile_css?: string;
  user_css?: string;
  site_lang?: SiteLang;
  vote_reminder_channel?: string;
}

export interface UpdateVoteReminders {
  mode: VoteReminderMode;
  bot_id: string;
}

export type BotCommandsGet = any;

export type BotFeatures = any;

/**
 * An enumeration.
 */
export type BotState = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

/**
 * 0 - Regular (Prefix) Command
  * 
  * 1 - Slash Command (Guild)
  * 
  * 2 - Slash Command (Global)
 */
export type CommandType = '0' | '1' | '2';

/**
 * An enumeration.
 */
export type LongDescType = '0' | '1' | '2';

/**
 * An enumeration.
 */
export type PromotionType = '0' | '1' | '2';

/**
 * An enumeration.
 */
export type ReviewType = '0' | '1';

/**
 * An enumeration.
 */
export type SearchType = 'bot' | 'server' | 'profile' | 'pack';

/**
 * Site languages
 */
export type SiteLang = 'en' | 'es' | 'fr' | 'hi' | 'ru';

export type StaffRoles = any;

/**
 * Status object (See https://docs.fateslist.xyz/basics/basic-structures#status for more information)
 */
export type Status = '0' | '1' | '2' | '3' | '4';

/**
 * An enumeration.
 */
export type UserState = '0' | '1' | '2' | '3' | '4';

/**
 * An enumeration.
 */
export type VanityType = 'bot' | 'guild';

/**
 * An enumeration.
 */
export type VoteReminderMode = '0' | '1';

/**
 * An enumeration.
 */
export type WidgetFormat = 'json' | 'html' | 'png' | 'webp';

