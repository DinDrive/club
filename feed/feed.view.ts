namespace $.$$ {
	export class $club_feed extends $.$club_feed {
		@$mol_mem
		page(next?: number) {
			return $club_api.feed_page(next)
		}

		@$mol_mem
		feed() {
			return $club_api.feed()
		}

		@$mol_mem
		is_top() {
			const ord = $club_api.feed_ordering()
			return ord === 'top_week' || ord === 'top_month' || ord === 'top_year'
		}

		@$mol_mem
		Ord_top() {
			const link = super.Ord_top()
			if (this.is_top()) {
				const current = $club_api.feed_ordering()
				link.arg = () => ({ ordering: current })
			}
			return link
		}

		@$mol_mem
		feed_body() {
			const parts: any[] = [this.Ordering()]
			if (this.is_top()) {
				parts.push(this.Ordering_extra())
			}
			parts.push(this.Posts())
			parts.push(this.Pager())
			return parts
		}

		@$mol_mem
		posts() {
			return (this.feed()?.items ?? []).filter((p: any) => p._club?.type !== 'weekly_digest')
		}

		@$mol_mem
		post_cards() {
			return this.posts().map(post => {
				const card = new this.$.$club_card()
				card.post = () => post
				return card
			})
		}
	}
}
