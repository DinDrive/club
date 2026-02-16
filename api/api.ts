namespace $ {
	export class $club_api extends $mol_object {
		static prod = 'https://vas3k.club'
		static dev = 'http://localhost:8000'

		@$mol_mem
		static token(next?: string) {
			return $mol_state_local.value('club_token', next) ?? ''
		}

		static fetch_from<T>(base: string, url: string, with_token: boolean): T {
			const token = with_token ? this.token() : ''
			const separator = url.includes('?') ? '&' : '?'
			const auth = token ? `${separator}token=${token}` : ''
			const response = $mol_fetch.response(`${base}${url}${auth}`)
			if (!response.ok()) {
				if (response.code() === 404) return null as T
				$mol_fail(new Error(`API error ${response.code()}`))
			}
			return response.json() as T
		}

		static fetch_json<T>(url: string): T {
			try {
				return this.fetch_from<T>(this.prod, url, false)
			} catch (error: any) {
				if (error instanceof Promise) throw error
				return this.fetch_from<T>(this.dev, url, true)
			}
		}

		static fetch_json_auth<T>(url: string): T {
			try {
				return this.fetch_from<T>(this.prod, url, true)
			} catch (error: any) {
				if (error instanceof Promise) throw error
				return this.fetch_from<T>(this.dev, url, true)
			}
		}

		@$mol_mem
		static feed_ordering(next?: string) {
			return $mol_state_arg.value('ordering', next) ?? 'activity'
		}

		@$mol_mem
		static feed_type(next?: string) {
			return $mol_state_arg.value('type', next) ?? 'all'
		}

		@$mol_mem
		static feed_page(next?: number) {
			if (next !== undefined) {
				$mol_state_arg.value('page', String(next))
			}
			return Number($mol_state_arg.value('page') ?? '1')
		}

		@$mol_mem
		static feed() {
			const type = this.feed_type()
			const ordering = this.feed_ordering()
			const page = this.feed_page()
			return this.fetch_json<$club_api_feed>(`/${type}/${ordering}/feed.json?page=${page}`)
		}

		static post(type: string, slug: string) {
			return this.fetch_json<$club_api_post_response>(`/${type}/${slug}.json`)
		}

		static post_comments(type: string, slug: string) {
			return this.fetch_json_auth<$club_api_comments_response>(`/${type}/${slug}/comments.json`)
		}

		static profile(slug: string) {
			return this.fetch_json_auth<$club_api_profile_response>(`/user/${slug}.json`)
		}

		static profile_tags(slug: string) {
			return this.fetch_json_auth<$club_api_tags_response>(`/user/${slug}/tags.json`)
		}

		static profile_badges(slug: string) {
			return this.fetch_json_auth<$club_api_badges_response>(`/user/${slug}/badges.json`)
		}

		static profile_achievements(slug: string) {
			return this.fetch_json_auth<$club_api_achievements_response>(`/user/${slug}/achievements.json`)
		}

		@$mol_mem
		static bookmarks() {
			return this.fetch_json_auth<$club_api_bookmarks_response>(`/bookmarks.json`)
		}

		@$mol_mem
		static rooms() {
			return this.fetch_json_auth<$club_api_rooms_response>(`/rooms.json`)
		}

		@$mol_mem
		static friends() {
			return this.fetch_json_auth<$club_api_friends_response>(`/friends.json`)
		}
	}

	// Feed — JSON Feed format
	export interface $club_api_feed {
		title: string
		items: $club_api_post[]
		next_url: string
	}

	// Post to_dict() format
	export interface $club_api_post {
		id: string
		url: string
		title: string
		content_text: string
		date_published: string
		date_modified: string
		authors: $club_api_author[]
		_club: {
			type: string
			slug: string
			coauthors: string[]
			comment_count: number
			view_count: number
			upvotes: number
			is_public: boolean
			is_commentable: boolean
			room?: { slug: string; title: string }
		}
	}

	export interface $club_api_author {
		name: string
		url: string
		avatar: string
	}

	// User to_dict() format
	export interface $club_api_user {
		id: string
		slug: string
		full_name: string
		avatar: string | null
		bio: string | null
		upvotes: number
		created_at: string
		membership_started_at: string
		membership_expires_at: string
		moderation_status: string
		payment_status: string
		company: string | null
		position: string | null
		city: string | null
		country: string | null
		is_active_member: boolean
	}

	// Comment to_dict() format
	export interface $club_api_comment {
		id: string
		url: string
		text: string
		author: $club_api_user
		reply_to_id: string | null
		upvotes: number
		created_at: string
	}

	// Room to_dict() format
	export interface $club_api_room {
		slug: string
		title: string
		subtitle: string | null
		description: string | null
		chat_name: string | null
		chat_url: string | null
		chat_member_count: number
	}

	// Tag
	export interface $club_api_tag {
		code: string
		name: string
	}

	// Badge
	export interface $club_api_badge {
		code: string
		title: string
		description: string | null
		created_at: string
	}

	export interface $club_api_user_badge {
		badge: $club_api_badge
		from_user: $club_api_user
		created_at: string
		note: string | null
	}

	// Achievement
	export interface $club_api_achievement {
		code: string
		name: string
		image: string
		description: string
		style: string
	}

	export interface $club_api_user_achievement {
		achievement: $club_api_achievement
		created_at: string
	}

	// Response shapes
	export interface $club_api_post_response {
		post: $club_api_post
	}

	export interface $club_api_comments_response {
		comments: $club_api_comment[]
	}

	export interface $club_api_profile_response {
		user: $club_api_user
	}

	export interface $club_api_tags_response {
		tags: Record<string, { code: string; name: string }[]>
	}

	export interface $club_api_badges_response {
		user_badges: $club_api_user_badge[]
	}

	export interface $club_api_achievements_response {
		user_achievements: $club_api_user_achievement[]
	}

	export interface $club_api_bookmarks_response {
		posts: $club_api_post[]
		page: number
		total_pages: number
		has_next: boolean
	}

	export interface $club_api_rooms_response {
		rooms: $club_api_room[]
	}

	export interface $club_api_friends_response {
		friends: ($club_api_friend & { user: $club_api_user })[]
		page: number
		total_pages: number
		has_next: boolean
	}

	export interface $club_api_friend {
		id: string
		created_at: string
		is_subscribed_to_posts: boolean
		is_subscribed_to_comments: boolean
	}
}
