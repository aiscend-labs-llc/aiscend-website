declare module 'lottie-web' {
  export interface AnimationItem {
    play(): void
    stop(): void
    destroy(): void
    pause(): void
    goToAndStop(value: number, isFrame?: boolean): void
    goToAndPlay(value: number, isFrame?: boolean): void
    playSegments(segments: [number, number] | [number, number][], forceFlag?: boolean): void
    setSpeed(speed: number): void
    setDirection(direction: 1 | -1): void
    addEventListener(name: string, callback: () => void): void
    removeEventListener(name: string, callback?: () => void): void
    totalFrames: number
    currentFrame: number
    isPaused: boolean
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
