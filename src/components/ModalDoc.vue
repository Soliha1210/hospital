<template>
	<div>
		<div class="modal" v-show="modalDoc" v-on:keypress.enter="add">
			<div class="new">
				<div class="title">
					Registration of a new doctor
				</div>
				<div class="input">
					<input type="text" placeholder="Photo" v-model="doc.pic">
					<input type="text" placeholder="Name Surname" v-model="doc.name">
					<input type="text" placeholder="email" v-model="doc.email">
					<input type="text" placeholder="Specialty" v-model="doc.spec">
					<input type="date" placeholder="Section" v-model="doc.section">
					<input type="text" placeholder="Reception days" v-model="doc.acceptance">
					<select class="sel" v-model="doc.specialized">
						<option value="Surgeon">Surgeon</option>
						<option value="Neurologist">Nevropotolog</option>
						<option value="Lor">Lor</option>
						<option value="Therapeutis">Therapeutis</option>
						<option value="Okulist">Oculist</option>
					</select>
					<input type="date" placeholder="Date of commencement" v-model="doc.workdate">
					<select class="sel" v-model="doc.worksec">
						<option value="">Working department</option>
						<option value="Neurology">Neurology</option>
						<option value="Traumatology">Traumatology</option>
						<option value="Surgery">Surgery</option>
					</select>
					<input type="text" placeholder="Work schedule" v-model="doc.worktime">
					<input type="text" placeholder="Work experience" v-model="doc.staj">
					<input type="date" placeholder="Date of birth" v-model="doc.docborn">
					<input type="text" placeholder="Family status" v-model="doc.docfamily">
					<input type="number" placeholder="Telephon number" v-model="doc.doctel">
					<input type="text" placeholder="Place of birth" v-model="doc.docplace">
					<input type="text" placeholder="Education" v-model="doc.docinfo">
					<input type="number" placeholder="Oila a'zolaridan telfon raqami">
					<input type="text" placeholder="Address" v-model="doc.docaddress">
				</div>
				<div class="btn">
					<button class="cencel" @click="closeModalDoc">Cencel</button>
					<button class="add" @click="add">Add</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				doc: {},
				doctor: {}
			}
		},
		methods: {
			closeModalDoc() {
				this.$store.commit('changeModalDoc', false)


			},
			add() {
				this.$store.dispatch('addDoctor', this.doc)
				this.doc = {}
				this.$store.commit('changeModalDoc', false)
			}
		},
		computed: {
			modalDoc() {
				return this.$store.getters.getModalDoc

			}
		}
	}
</script>

<style>
	.modal {
		padding: 100px;
		background: rgba(19, 19, 19, 0.58);
		height: 100%;
		left: 0;
		right: 0;
		position: fixed;
		top: 0;
	}

	.title {
		text-align: center;
	}

	.new {
		margin: auto;
		background-color: #FFFFFF;
		height: 100%;
	}

	.input {
		width: 1200px;
		margin: auto;

	}

	.input input {
		width: 268px;
		height: 32px;
		border-radius: 10px;
		margin-top: 18px;
		background: #FDFDFD;
		border: 1px solid #BBBBBB;
		padding-left: 14px;
		margin-right: 20px;
	}

	input:focus {
		outline: 0;
	}

	.sel {
		width: 268px;
		height: 32px;
		border-radius: 10px;
		margin-top: 18px;
		background: #FDFDFD;
		border: 1px solid #BBBBBB;
		padding-left: 14px;
		margin-right: 20px;
	}

	.sel:focus {
		outline: 0;
	}

	.btn {
		margin-left: 33px;
		justify-content: center;
		display: flex;
		margin-top: 20px;
	}

	.cencel {
		width: 130px;
		height: 32px;
		border-radius: 10px;
		background-color: #EB5757;
		color: white;
		font-size: 11px;
		margin-top: 18px;
		margin-right: 8px;
	}

	.add {
		width: 130px;
		height: 32px;
		border-radius: 10px;
		background-color: #27AE60;
		color: white;
		font-size: 11px;
		margin-top: 18px;
	}
</style>