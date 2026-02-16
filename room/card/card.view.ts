namespace $.$$ {
	export class $club_room_card extends $.$club_room_card {
		uri() {
			return `https://vas3k.club/room/${this.room_slug()}/`
		}

		attr() {
			return {
				...super.attr(),
				style: `background-color: ${this.room_color()}`,
			}
		}
	}
}
