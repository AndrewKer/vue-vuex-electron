<template>
	<div>
		<h1>Component 1</h1>
		<md-steppers :md-active-step.sync="active" md-linear>
			<md-step id="first" md-label="1" :md-done.sync="first">
                <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Continue</md-button>
			</md-step>
			<md-step id="second" md-label="2" :md-error="secondStepError" :md-done.sync="second">
                <md-button class="md-raised md-primary" @click="setDone('second', 'third')">Continue</md-button>
				<md-button class="md-raised md-primary" @click="setError()">Set error!</md-button>
			</md-step>
			<md-step id="third" md-label="3" :md-done.sync="third">
                <md-button class="md-raised md-primary" @click="setDone('third', 'fourth')">Continue</md-button>
			</md-step>
			<md-step id="fourth" md-label="4" md-description="Optional" :md-done.sync="fourth">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
				<md-button class="md-raised md-primary" @click="setDone('fourth', 'fifth')">Continue</md-button>
			</md-step>
            <md-step id="fifth" md-label="5" :md-done.sync="fifth">
                <md-button class="md-raised md-primary" @click="setDone('fifth' , 'sixth')">Continue</md-button>
			</md-step>
            <md-step id="sixth" md-label="6" md-description="Optional" :md-done.sync="fifth">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
				<md-button class="md-raised md-primary" @click="setDone('sixth')">Done</md-button>
			</md-step>
		</md-steppers>
        <md-button class="md-primary md-raised">CREATE</md-button>
        <md-dialog-confirm
            id="info-alert"
            :md-active.sync="missing"
            md-title=""
            :md-content="alertMessage"
            />
	</div>
</template>

<script>
    import { log } from 'util';
    import { mapState } from 'vuex';

    var fs = require('fs');
    export default {
        name: 'McaseWindow',
        options: {
            mode: 'text'
        },
        data: () => ( {
        }),
        methods: {
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
        computed: {
            ...mapState([
				'workingDir'
			])
        }
    };
</script>

<style lang="scss" scoped>
    #center {
        text-align: center;
    }
    #info-alert {
        z-index: 20;
    }
</style>