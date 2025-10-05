	($.$club_main) = class $club_main extends ($.$mol_page) {
		Logo(){
			const obj = new this.$.$mol_image();
			(obj.uri) = () => ((this.logo_url()));
			return obj;
		}
		Title(){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ("Вастрик Клуб");
			return obj;
		}
		Lighter(){
			const obj = new this.$.$mol_lights_toggle();
			return obj;
		}
		Pag1(){
			const obj = new this.$.$mol_paginator();
			(obj.value) = (next) => ((this.page_number(next)));
			return obj;
		}
		item_title(id){
			return "";
		}
		Post(id){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ({"post": (this.item_url(id))});
			(obj.title) = () => ((this.item_title(id)));
			return obj;
		}
		list_items(){
			return [(this.Post("0"))];
		}
		Posts(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.list_items()));
			return obj;
		}
		Pag2(){
			const obj = new this.$.$mol_paginator();
			(obj.value) = (next) => ((this.page_number(next)));
			return obj;
		}
		Scroll(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([
				(this.Pag1()), 
				(this.Posts()), 
				(this.Pag2())
			]);
			return obj;
		}
		Scll(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ([(this.Scroll())]);
			return obj;
		}
		page_number(next){
			if(next !== undefined) return next;
			return 1;
		}
		item_url(id){
			return "";
		}
		head(){
			return [
				(this.Logo()), 
				(this.Title()), 
				(this.Lighter())
			];
		}
		body(){
			return [(this.Scll())];
		}
	};
	($mol_mem(($.$club_main.prototype), "Logo"));
	($mol_mem(($.$club_main.prototype), "Title"));
	($mol_mem(($.$club_main.prototype), "Lighter"));
	($mol_mem(($.$club_main.prototype), "Pag1"));
	($mol_mem_key(($.$club_main.prototype), "Post"));
	($mol_mem(($.$club_main.prototype), "Posts"));
	($mol_mem(($.$club_main.prototype), "Pag2"));
	($mol_mem(($.$club_main.prototype), "Scroll"));
	($mol_mem(($.$club_main.prototype), "Scll"));
	($mol_mem(($.$club_main.prototype), "page_number"));

//# sourceMappingURL=main.view.tree.js.map