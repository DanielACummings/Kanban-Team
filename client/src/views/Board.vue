<template>
	<div class="board container mt-5">
		<div class="row">
			<div class="col-12">
				<div class="text-left">
					<router-link class="home-button" :to="{ path: '/' }">Home</router-link>
				</div>
				<h1 class="pb-1">{{board.title}}</h1>
				<p class="pb-4">{{board.description}}</p>

				<form @submit.prevent="createList">
					<input v-model="list.title" type="text" placeholder="List Name" />
					<button class="btn btn-primary">Add List</button>
				</form>
			</div>
		</div>
		<div class="row">
			<div class="col-12 col-md-6 col-lg-4" v-for="list in lists" :key="list.id">
				<List-info :listData="list" />
			</div>
		</div>
	</div>
</template>

<script>
import ListInfo from "@/components/ListInfo";

export default {
	name: "board",
	mounted() {
		this.$store.dispatch("getBoards");
		this.$store.dispatch("getListsByBoard", this.$props.boardId);
	},
	components: {
		ListInfo
	},
	data() {
		return {
			list: {
				title: "",
				authorId: this.$store.state.user._id,
				boardId: this.$props.boardId
			}
		};
	},
	methods: {
		createList() {
			let newList = { ...this.list };
			this.$store.dispatch("createList", newList);
			this.list.title = "";
		}
	},
	computed: {
		lists() {
			return this.$store.state.lists;
		},
		board() {
			return (
				this.$store.state.boards.find(b => b._id == this.boardId) || {
					title: "Loading..."
				}
			);
		}
	},
	props: ["boardId"]
};
</script>
<style scoped>
.home-button {
	font-size: 20px;
	color: white;
}
</style>