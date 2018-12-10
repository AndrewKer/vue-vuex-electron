<template>
   <div id="app">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
     	<md-toolbar id="main-toolbar" >
      		<div class="md-toolbar-section-start">
        		<!--<img id="logo" src="./assets/logo.png">-->
        		<h3 class="md-title">APP</h3>
      		</div> 	  
      		<div class="md-toolbar-section-end">
       	 		<md-button class="md-icon-button">
          			<md-icon>more_vert</md-icon>
        		</md-button>
      		</div>
    	</md-toolbar>
		<md-menu md-size="medium" md-align-trigger>
      		<md-button md-menu-trigger>File</md-button>
			<md-menu-content>
				<md-menu-item @click="startNew">Start new</md-menu-item>
				<md-menu-item @click="saveAs">Save as...</md-menu-item>
			</md-menu-content>
			<md-button md-menu-trigger>Help</md-button>
    	</md-menu>
		<md-toolbar md-elevation="0" class="toolbar2 md-dense">
			<md-button to="/tab1">TAB_1</md-button>
			<md-button to="/tab2">TAB_2</md-button>
			<md-button to="/tab3">TAB_3</md-button>
		</md-toolbar>
		<div class="elevation-demo">
			<md-content class="md-elevation-0">
				<router-view/>
			</md-content>
		</div>
  	</div>
</template>

<script>
  import { mapState } from 'vuex';

  var fs = require('fs');

  export default {
    name: "App",
    options: {
      mode: 'text'
	},
	computed: {
		...mapState([
			'workingDir'
		])
	},
    methods: {
		startNew() {
			console.log('Start New');
		},
		saveAs() {
			console.log('Save As...');
			let writeStream = fs.createWriteStream('SAVE.TXT');
			writeStream.write(this.workingDir);
			writeStream.end();
		}
	}
  };
</script>
<style>

</style>