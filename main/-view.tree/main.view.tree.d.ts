declare namespace $ {

	type $mol_image__uri_club_main_1 = $mol_type_enforce<
		ReturnType< $club_main['logo_url'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_paragraph__title_club_main_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paginator__value_club_main_3 = $mol_type_enforce<
		ReturnType< $club_main['page_number'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	type $mol_link__arg_club_main_4 = $mol_type_enforce<
		({ 
			'post': ReturnType< $club_main['item_url'] >,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__title_club_main_5 = $mol_type_enforce<
		ReturnType< $club_main['item_title'] >
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_list__rows_club_main_6 = $mol_type_enforce<
		ReturnType< $club_main['list_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_paginator__value_club_main_7 = $mol_type_enforce<
		ReturnType< $club_main['page_number'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	type $mol_list__rows_club_main_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_club_main_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	export class $club_main extends $mol_page {
		Logo( ): $mol_image
		Title( ): $mol_paragraph
		Lighter( ): $mol_lights_toggle
		Pag1( ): $mol_paginator
		item_title( id: any): string
		Post( id: any): $mol_link
		list_items( ): readonly(any)[]
		Posts( ): $mol_list
		Pag2( ): $mol_paginator
		Scroll( ): $mol_list
		Scll( ): $mol_scroll
		page_number( next?: number ): number
		item_url( id: any): string
		head( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=main.view.tree.d.ts.map