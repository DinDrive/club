namespace $.$$ {
	export class $club_tag extends $.$club_tag {
		tag_data() {
			return this.tag() as $club_api_tag | null
		}

		tag_name() {
			return this.tag_data()?.name ?? ''
		}
	}
}
