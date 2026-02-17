namespace $.$$ {

	export class $club_rooms extends $.$club_rooms {

		@ $mol_mem
		data() {
			return $club_api.rooms()
		}

		@ $mol_mem
		rooms_list() {
			return this.data()?.rooms ?? []
		}

		room_rows() {
			return this.rooms_list().map( ( _, i ) => this.Room( i ) )
		}

		room_title( id: number ) {
			return this.rooms_list()[ id ]?.title ?? ''
		}

		room_subtitle( id: number ) {
			return this.rooms_list()[ id ]?.subtitle ?? ''
		}

		room_members( id: number ) {
			const count = this.rooms_list()[ id ]?.chat_member_count ?? 0
			return count ? `${ count } участников` : ''
		}
	}
}
