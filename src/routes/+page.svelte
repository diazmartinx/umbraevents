<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>JOWO - HARD TECHNO</title>
</svelte:head>

<div
	class="flex min-h-screen flex-col items-center bg-black px-4 py-12 font-mono text-zinc-300 selection:bg-red-900 selection:text-white"
>
	<!-- Noise overlay -->
	<div
		class="pointer-events-none fixed inset-0 z-50 opacity-10 mix-blend-overlay"
		style="background-image: url('https://www.transparenttextures.com/patterns/stardust.png');"
	></div>

	<!-- Profile Section -->
	<header class="mt-10 mb-16 flex w-full max-w-2xl flex-col items-center gap-6 text-center">
		<div class="avatar relative">
			<div class="absolute -inset-1 animate-pulse bg-red-600 opacity-20 blur-md"></div>
			<div
				class="relative filter w-40 overflow-hidden border-2 border-red-900 grayscale transition-all duration-700 hover:grayscale-0 md:w-56"
			>
				<img
					src={data.profilePicture}
					alt="JOWO Profile"
					class="object-cover"
					referrerpolicy="no-referrer"
				/>
			</div>
		</div>

		<h1
			class="text-6xl font-black tracking-tighter text-white drop-shadow-[0_0_15px_rgba(220,38,38,0.5)] md:text-8xl"
		>
			JOWO
		</h1>
		<p class="-mt-4 text-sm font-bold tracking-[0.3em] text-red-600 uppercase md:text-base">
			HARD TECHNO // INDUSTRIAL
		</p>

		<div class="mt-4 flex flex-col items-center gap-4 sm:flex-row">
			<a
				href={data.soundcloud}
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center border border-zinc-800 bg-zinc-950 px-8 py-3 font-bold tracking-widest text-zinc-400 transition-all hover:border-red-900 hover:bg-zinc-900 hover:text-white hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="mr-3 text-orange-500"
				>
					<path
						d="M11.82 17.36v-6.6l.04-1.12.03-1.01.03-.9.03-.78.03-.66.04-.54.04-.41.05-.28.06-.15.07-.02.09.13.09.28.1.43.1.58.11.73.11.87.12 1.02.13 1.15.13 1.28.14 1.4.14 1.5.15 1.58.15 1.62.15 1.64.15 1.62.14 1.55v1.4h-.35v-.36h-.47v.36h-.37v-.36h-.49v.36h-.38v-8.87m-2.13 8.87v-7.14l.03-1.16.03-1.05.03-.94.04-.82.04-.7.04-.56.05-.42.06-.28.06-.14.07-.02.09.12.09.26.1.4.1.55.12.69.12.83.13.97.13 1.1.14 1.22.14 1.34.14 1.43.15 1.51.15 1.55.15 1.55.15 1.51v1.65h-.36v-.37h-.49v.37h-.37v-.37h-.49v.37h-.39v-8.87m-2.12 8.87v-7.57l.03-1.18.03-1.07.03-.95.04-.83.04-.69.04-.56.05-.41.06-.26.06-.12.07-.01.09.11.09.24.1.37.11.51.11.64.12.77.12.9.13 1.01.14 1.13.14 1.23.14 1.31.14 1.38.15 1.43.14 1.43.14 1.39v1.94h-.38v-.38h-.48v.38h-.38v-.38h-.48v.38h-.39v-8.87m-2.12 8.87v-7.86l.03-1.17.03-1.06.03-.93.04-.8.04-.67.04-.53.05-.39.05-.24.06-.1.07.01.08.1.09.22.1.34.1.46.11.58.12.69.12.8.13.9.13 1.01.14 1.09.14 1.18.14 1.24.14 1.29.14 1.31.14 1.28v2.24h-.39v-.39h-.47v.39h-.39v-.39h-.47v.39h-.39v-8.87m-2.12 8.87v-8.03l.02-1.15.03-1.03.03-.91.04-.78.04-.65.04-.51.05-.36.06-.22.06-.09.07.02.08.1.09.2.09.3.1.42.11.52.12.62.12.73.13.82.13.91.13.99.14 1.07.14 1.12.14 1.16.14 1.17v2.53h-.4v-.39h-.46v.39h-.4v-.39h-.46v.39h-.4v-8.87m-2.11 8.87v-8.08l.02-1.11.03-1.01.03-.89.04-.76.04-.63.04-.49.05-.35.06-.2.06-.07.07.03.08.1.09.18.09.28.1.38.1.49.11.58.12.68.12.77.13.85.13.93.13 1.01.13 1.06.14 1.1v2.8h-.41v-.4h-.45v.4h-.41v-.4h-.45v.4h-.41v-8.87m-2.11 8.87v-8.01l.03-1.06.03-.96.03-.86.04-.74.04-.62.04-.5.05-.37.05-.24.06-.12.07.02.08.12.09.24.1.36.1.48.11.6.12.7.12.81.13.92.13 1.01.13 1.1.14 1.17v3h-.42v-.4h-.43v.4h-.42v-.4h-.44v.4h-.41v-8.87m-2.11 8.87v-7.8l.02-1.02.03-.92.03-.82.04-.72.04-.62.04-.51.05-.41.05-.3.06-.19.07.03.08.14.09.28.1.42.1.56.11.69.12.81.12.94.13 1.06.13 1.16v3.15h-.43v-.41h-.42v.41h-.43v-.41h-.42v.41h-.42v-8.87m-2.12 8.87v-7.46l.02-.97.03-.88.03-.79.04-.69.04-.61.04-.52.05-.42.06-.33.06-.23.07.03.08.17.09.31.1.47.1.62.11.78.12.92.12 1.07.12 1.2v3.25h-.44v-.42h-.4v.42h-.44v-.42h-.41v.42h-.43v-8.87m-2.1 8.87v-7.05l.03-.94.03-.85.03-.76.04-.68.04-.61.04-.53.05-.45.06-.36.06-.28.07.04.08.2.09.36.1.53.1.7.11.87.12 1.04v4.45h-.45v-.42h-.38v.42h-.45v-.42h-.39v.42h-.44v-8.87M24 12V3h-2.1v9h2.1zm-3.5-3.3v6.6l.04-1.12.03-1.01.03-.9.03-.78.03-.66.04-.54.04-.41.05-.28.06-.15.07-.02.09.13.09.28.1.43.1.58.11.73.11.87.12 1.02.13 1.15.13 1.28.14 1.4.14 1.5.15 1.58.15 1.62.15 1.64.15 1.62.14 1.55v1.4h-.35v-.36h-.47v.36h-.37v-.36h-.49v.36h-.38v-8.87z"
					/>
				</svg>
				SOUNDCLOUD
			</a>
			<a
				href={data.instagram}
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center border border-zinc-800 bg-zinc-950 px-8 py-3 font-bold tracking-widest text-zinc-400 transition-all hover:border-red-900 hover:bg-zinc-900 hover:text-white hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="mr-3 text-pink-500"
				>
					<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
					<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
					<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
				</svg>
				INSTAGRAM
			</a>
		</div>
	</header>

	<!-- Events Section -->
	<main class="relative z-10 flex w-full max-w-4xl flex-col items-center gap-12 pb-24">
		<div class="flex w-full items-center gap-6">
			<div class="h-px flex-1 bg-gradient-to-r from-transparent via-red-900 to-transparent"></div>
			<h2 class="text-center text-2xl font-black tracking-[0.2em] text-white">UPCOMING EVENTS</h2>
			<div class="h-px flex-1 bg-gradient-to-r from-transparent via-red-900 to-transparent"></div>
		</div>

		{#if data.events.length === 0}
			<div
				class="border border-red-900/50 bg-black/50 p-6 text-center font-bold tracking-widest text-red-600 uppercase"
			>
				<span>NO SIGNALS DETECTED.</span>
			</div>
		{/if}

		<div class="flex w-full flex-col gap-16">
			{#each data.events as event}
				<article
					class="group relative flex flex-col items-center border border-zinc-900 bg-black shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-colors duration-500 hover:border-red-900 lg:flex-row"
				>
					<!-- Geometric accent -->
					<div
						class="absolute -top-1 -left-1 h-4 w-4 border-t-2 border-l-2 border-red-700 opacity-0 transition-opacity group-hover:opacity-100"
					></div>
					<div
						class="absolute -right-1 -bottom-1 h-4 w-4 border-r-2 border-b-2 border-red-700 opacity-0 transition-opacity group-hover:opacity-100"
					></div>

					{#if event.image}
						<figure
							class="relative h-64 w-full self-stretch overflow-hidden border-b border-zinc-900 lg:h-auto lg:w-2/5 lg:border-r lg:border-b-0"
						>
							<img
								src={event.image}
								alt={event.title}
								class="filter h-full w-full object-cover brightness-75 contrast-125 grayscale hue-rotate-[320deg] sepia-[.2] transition-all duration-700 group-hover:brightness-100 group-hover:grayscale-0"
								referrerpolicy="no-referrer"
							/>
							<div
								class="absolute inset-0 bg-red-900 opacity-40 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0"
							></div>

							<!-- Date Badge -->
							<div
								class="absolute top-4 left-4 border border-zinc-800 bg-black px-3 py-1 text-center font-sans"
							>
								<div class="mb-[2px] text-[0.65rem] font-bold tracking-widest text-red-500">
									{event.time}
								</div>
								<div class="text-sm font-black tracking-widest text-white uppercase">
									{event.date}
								</div>
							</div>
						</figure>
					{/if}

					<div class="flex w-full flex-1 flex-col justify-center p-6 md:p-8">
						<div class="mb-6 flex flex-col items-start justify-between gap-4">
							<div
								class="mb-1 inline-block border border-red-900/30 bg-red-900/10 px-3 py-1 text-xs font-bold tracking-[0.2em] text-red-500"
							>
								{event.name}
							</div>
							<h3 class="text-4xl font-black tracking-tighter text-white uppercase md:text-5xl">
								{event.title}
							</h3>
						</div>

						<p class="mb-8 font-sans text-sm leading-relaxed text-zinc-400 md:text-base">
							{event.description}
						</p>

						<div
							class="mt-auto flex flex-col items-start justify-between gap-6 border-t border-zinc-900 pt-6 sm:flex-row sm:items-end"
						>
							<div
								class="flex flex-col gap-2 font-sans text-xs tracking-widest text-zinc-500 md:text-sm"
							>
								<div class="flex items-center gap-2">
									<svg
										class="h-4 w-4 text-red-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										><path
											stroke-linecap="square"
											stroke-linejoin="miter"
											stroke-width="2"
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										></path><path
											stroke-linecap="square"
											stroke-linejoin="miter"
											stroke-width="2"
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										></path></svg
									>
									<span>{event.location}</span>
								</div>
								<div class="flex items-center gap-2 text-[10px] md:text-xs">
									<svg
										class="h-4 w-4 text-zinc-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										><path
											stroke-linecap="square"
											stroke-linejoin="miter"
											stroke-width="2"
											d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
										></path></svg
									>
									<span>{event.latitude}, {event.longitude}</span>
								</div>
								<div class="mt-2 flex items-center gap-2">
									<span class="text-lg font-black text-white">{event.price}</span>
								</div>
							</div>

							<a
								href={event.ticketLink}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex w-full items-center justify-center border-2 border-red-700 bg-red-700 px-6 py-3 text-sm font-bold tracking-[0.2em] whitespace-nowrap text-white transition-all hover:bg-black hover:text-red-500 hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] sm:w-auto"
							>
								BUY TICKETS
							</a>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</main>
</div>
