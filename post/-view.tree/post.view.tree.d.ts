declare namespace $ {

	type $mol_button_major__title_club_post_1 = $mol_type_enforce<
		ReturnType< $club_post['upvotes'] >
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_paragraph__title_club_post_2 = $mol_type_enforce<
		ReturnType< $club_post['post_title'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_date__value_club_post_3 = $mol_type_enforce<
		ReturnType< $club_post['date_published'] >
		,
		ReturnType< $mol_date['value'] >
	>
	type $mol_date__value_club_post_4 = $mol_type_enforce<
		ReturnType< $club_post['date_modified'] >
		,
		ReturnType< $mol_date['value'] >
	>
	type $mol_view__sub_club_post_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text_club_post_6 = $mol_type_enforce<
		ReturnType< $club_post['text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_image__uri_club_post_7 = $mol_type_enforce<
		ReturnType< $club_post['author_avatar'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_text__text_club_post_8 = $mol_type_enforce<
		ReturnType< $club_post['author_name'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_link__uri_club_post_9 = $mol_type_enforce<
		ReturnType< $club_post['author_url'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__title_club_post_10 = $mol_type_enforce<
		ReturnType< $club_post['author_name'] >
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__sub_club_post_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_list__rows_club_post_12 = $mol_type_enforce<
		ReturnType< $club_post['list_authors'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $club_post extends $mol_page {
		Upvote( ): $mol_button_major
		Title( ): $mol_paragraph
		DatePublished( ): $mol_date
		DateModified( ): $mol_date
		Header( ): $mol_view
		Article( ): $mol_text
		AuthorAvatar( id: any): $mol_image
		AuthorName( id: any): $mol_text
		Author( id: any): $mol_link
		list_authors( ): readonly(any)[]
		Authors( ): $mol_list
		post_title( next?: string ): string
		authorization( next?: boolean ): boolean
		post_url( ): string
		comments_url( ): string
		text( ): string
		date_published( ): string
		date_modified( ): string
		author_url( id: any): string
		author_name( id: any): string
		author_avatar( id: any): string
		head( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=post.view.tree.d.ts.map