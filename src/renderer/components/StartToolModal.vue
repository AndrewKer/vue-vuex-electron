<template>
	<div>
		<!-- Start Tool modal -->
		<md-dialog :md-active.sync="startDialog">
			<md-dialog-title>Start the tool</md-dialog-title>
			<label>{{ workingDir }}</label>
			<div>
				<md-content class="md-primary directory">
					<h4>Please select a working folder:</h4>
					<input class="col-sm-8" type="text" placeholder="Working Directory..." readonly v-bind:value="workingDir">
					<button @click="selectWorkingDirectory" class="btn btn-primary" id="folderSelectButton">Select Folder</button>
				</md-content>
			</div>
		</md-dialog>
	</div>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: 'Modal',
		computed: {
			...mapState([
				'workingDir'
			])
		},
		data: () => ({
			startDialog: true,
			formDialog: false
		}),
		methods: {
			selectWorkingDirectory() {
				const { dialog } = require('electron').remote;
				var self = this;
				dialog.showOpenDialog({ properties: ['openDirectory'] }, function (file) {
					if (file === undefined) {
						self.$store.commit('updateWorkingDir',"");
					} else {
						self.$store.commit('updateWorkingDir',file[0]);
					}
				});
			}
		}
  	};
</script>

<style lang="scss" scoped>
  	.md-dialog {
		max-width: 768px;
		padding-left: 20px;
		padding-right: 20px;
	}
	#formDialog {
		width: 700px;
		height: 500px;
		padding-left: 20px;
		padding-right: 20px;
		z-index: 12;
	}
	#center {
		text-align: center;
	}
	.md-content {
		max-width: 750px;
		max-height: 450px;
		overflow: auto;
	}
	.directory {
		padding: 5%;
	}
</style>