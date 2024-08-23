<template>
  <div>
    <div i-carbon-piggy-bank-slot text-4xl inline-block />
    <Suspense>
      <LazyViewsPageView />
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <LazyInputEntry />
  </div>
</template>
