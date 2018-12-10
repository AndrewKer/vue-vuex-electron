<template>
	<div>
		<h1>Component 3</h1>
		<md-steppers :md-active-step.sync="active" md-linear>
			<md-step id="first" md-label="First Step" md-description="Optional" :md-done.sync="first">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
				<md-button class="md-raised md-primary" @click="setDone('first', 'second')">Continue</md-button>
			</md-step>

			<md-step id="second" md-label="Second Step" :md-error="secondStepError" :md-done.sync="second">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
				<md-button class="md-raised md-primary" @click="setDone('second', 'third')">Continue</md-button>
				<md-button class="md-raised md-primary" @click="setError()">Set error!</md-button>
			</md-step>

			<md-step id="third" md-label="Third Step" :md-done.sync="third">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
				<md-button class="md-raised md-primary" @click="setDone('third', 'fourth')">Continue</md-button>
			</md-step>

			<md-step id="fourth" md-label="Fourth Step" :md-done.sync="fourth">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
				<md-button class="md-raised md-primary" @click="setDone('fourth')">Done</md-button>
			</md-step>
		</md-steppers>
		<StartToolModal/>
	</div>
</template>

<script>
	import StartToolModal from './StartToolModal';
	import { mapState } from 'vuex';
	import { mapActions } from 'vuex';

  	export default {
		name: 'Window3',
		computed: {
			...mapState([
				'locations'
			])
		},
		data: () => ({
			active: 'first',
			first: false,
			second: false,
			third: false,
			secondStepError: null		
		}),
		methods: {
			...mapActions([
				
				//'addLocation', // map `this.addLocation()` to `this.$store.dispatch('addLocation')`
			]),
			setDone (id, index) {
				this[id] = true
				this.secondStepError = null
				if (index) {
				this.active = index
				}
			},
			setError () {
				this.secondStepError = 'This is an error!'
			}
		},
		components: {
			StartToolModal
		}
  	};
</script>

<style lang="scss" scoped>

	.md-steppers {
		max-width: 80%;
		margin-right: 15%;
		margin-left: 15%
	}
</style>