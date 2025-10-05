	($.$club) = class $club extends ($.$mol_book2) {
		Theme(){
			const obj = new this.$.$mol_theme_auto();
			return obj;
		}
		Main(){
			const obj = new this.$.$club_main();
			return obj;
		}
		Post(){
			const obj = new this.$.$club_post();
			return obj;
		}
		plugins(){
			return [(this.Theme())];
		}
		pages(){
			return [(this.Main()), (this.Post())];
		}
	};
	($mol_mem(($.$club.prototype), "Theme"));
	($mol_mem(($.$club.prototype), "Main"));
	($mol_mem(($.$club.prototype), "Post"));

//# sourceMappingURL=club.view.tree.js.map