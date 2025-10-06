declare namespace $ {

	type $mol_text__text_club_main_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_image__uri_club_main_2 = $mol_type_enforce<
		ReturnType< $club_main['logo_url'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_text__text_club_main_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_check_icon__Icon_club_main_4 = $mol_type_enforce<
		ReturnType< $club_main['Settings_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__hint_club_main_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__checked_club_main_6 = $mol_type_enforce<
		ReturnType< $club_main['settings'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_view__sub_club_main_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_paginator__value_club_main_8 = $mol_type_enforce<
		ReturnType< $club_main['page_number'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	type $mol_button_major__title_club_main_9 = $mol_type_enforce<
		ReturnType< $club_main['post_upvotes'] >
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_view__sub_club_main_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_link__arg_club_main_11 = $mol_type_enforce<
		({ 
			'post': ReturnType< $club_main['post_url'] >,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_club_main_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_list__rows_club_main_13 = $mol_type_enforce<
		ReturnType< $club_main['list_posts'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_paginator__value_club_main_14 = $mol_type_enforce<
		ReturnType< $club_main['page_number'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	type $mol_list__rows_club_main_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_club_main_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	export class $club_main extends $mol_page {
		Title1( ): $mol_text
		Logo( ): $mol_image
		Title2( ): $mol_text
		Lighter( ): $mol_lights_toggle
		Settings_icon( ): $mol_icon_cog_outline
		Settings( ): $mol_check_icon
		Tools( ): $mol_view
		Pag1( ): $mol_paginator
		Upvote( id: any): $mol_button_major
		PostTitle( id: any): $mol_view
		Post( id: any): $mol_link
		list_posts( ): readonly(any)[]
		Posts( ): $mol_list
		Pag2( ): $mol_paginator
		Scroll( ): $mol_list
		Scll( ): $mol_scroll
		page_number( next?: number ): number
		post_url( id: any): string
		post_title( id: any): string
		post_upvotes( id: any): string
		logo_url( ): string
		settings( next?: boolean ): boolean
		head( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=main.view.tree.d.ts.map