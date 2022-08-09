<script lang="ts">
	import { scrollInto } from '@qoed/kit-utils/actions';
</script>

<div>
	<div class="h-screen bg-light-900">
		<div class="h-full flex flex-col items-center justify-center mx-auto max-w-[900px]">
			<div class="border border-gray-4 p-4 rounded-2 bg-gray-3 relative">
				<div class="i-custom-devteq text-[12rem]" />
			</div>
		</div>
	</div>
	<div class="h-[500px]">
		<div class="max-w-[900px] mx-auto">
			<div use:scrollInto class="p-4 mt-20 relative text-dark">
				<h2 class="text-4xl mb-4">Lorem ipsum dolor</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
			</div>
		</div>
	</div>
	<div class="h-screen bg-light" />
</div>

<style>
</style>
