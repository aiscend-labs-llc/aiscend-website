declare module 'lottie-web' {
  export interface AnimationItem {
    play(): void
    stop(): void
    destroy(): void
  }

  export interface LoadAnimationParams {
    container: Element
    renderer?: 'svg' | 'canvas' | 'html'
    loop?: boolean | number
    autoplay?: boolean
    name?: string
    path?: string
    animationData?: unknown
    rendererSettings?: Record<string, unknown>
  }

  const lottie: {
    loadAnimation(params: LoadAnimationParams): AnimationItem
  }

  export default lottie
}


