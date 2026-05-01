export class TxtType {
  private toRotate: string[]
  private el: HTMLElement
  private loopNum: number = 0
  private period: number
  private txt: string = ''
  private isDeleting: boolean = false
  private isAlive: boolean = true
  private timerId: ReturnType<typeof setTimeout> | null = null

  constructor(el: HTMLElement, toRotate: string[], period: number = 2000) {
    this.toRotate = toRotate
    this.el = el
    this.period = period
    this.tick()
  }

  private tick = (): void => {
    if (!this.isAlive) return

    const i = this.loopNum % this.toRotate.length
    const fullTxt = this.toRotate[i]

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

    let delta = 200 - Math.random() * 100

    if (this.isDeleting) {
      delta /= 2
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false
      this.loopNum++
      delta = 500
    }

    this.timerId = setTimeout(this.tick, delta)
  }

  stop(): void {
    this.isAlive = false
    if (this.timerId !== null) {
      clearTimeout(this.timerId)
      this.timerId = null
    }
  }
}
