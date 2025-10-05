declare namespace $ {

	type $mol_date__value_club_post_1 = $mol_type_enforce<
		ReturnType< $club_post['date_published'] >
		,
		ReturnType< $mol_date['value'] >
	>
	type $mol_date__value_club_post_2 = $mol_type_enforce<
		ReturnType< $club_post['date_modified'] >
		,
		ReturnType< $mol_date['value'] >
	>
	type $mol_view__sub_club_post_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text_club_post_4 = $mol_type_enforce<
		ReturnType< $club_post['text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_paragraph__title_club_post_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_link__title_club_post_6 = $mol_type_enforce<
		ReturnType< $club_post['comment_text'] >
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_list__rows_club_post_7 = $mol_type_enforce<
		ReturnType< $club_post['list_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $club_post extends $mol_page {
		DatePublished( ): $mol_date
		DateModified( ): $mol_date
		Header( ): $mol_view
		Article( ): $mol_text
		CommentTitle( ): $mol_paragraph
		comment_text( id: any): string
		Item( id: any): $mol_link
		list_items( ): readonly(any)[]
		Items( ): $mol_list
		post_title( next?: string ): string
		authorization( next?: boolean ): boolean
		post_url( ): string
		comments_url( ): string
		text( ): string
		date_published( ): string
		date_modified( ): string
		title( ): ReturnType< $club_post['post_title'] >
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=post.view.tree.d.ts.map