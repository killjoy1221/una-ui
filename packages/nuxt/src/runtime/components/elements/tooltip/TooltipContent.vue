<script setup lang="ts">
import { computed } from 'vue'
import { TooltipContent, TooltipPortal, useForwardPropsEmits } from 'radix-vue'
import type { TooltipContentEmits } from 'radix-vue'
import { cn } from '../../../utils'
import type { NTooltipContentProps } from '../../../types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NTooltipContentProps>(), {
  sideOffset: 4,
  tooltip: 'black',
})

const emits = defineEmits<TooltipContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TooltipPortal>
    <TooltipContent
      v-bind="{ ...forwarded, ...$attrs }"
      :class="cn(
        'tooltip-content',
        props.class,
        props.una?.tooltipContent,
      )"
      :tooltip
    >
      <slot />
    </TooltipContent>
  </TooltipPortal>
</template>
