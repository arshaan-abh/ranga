class Ranga {

    public load(): void {
        this.strong()
    }

    private strong(): void {
        let strongElements: HTMLCollectionOf<Element> = document.getElementsByTagName("strong")
        for (let i: number = 0; i < strongElements.length; i++) {
            let strongElement: Element = strongElements[i]
            strongElement.addEventListener("mouseenter", this.toggleAnimation)
            strongElement.addEventListener("animationend", this.toggleAnimation)
            strongElement["params"] = {
                element: strongElement,
                animationName: "strong",
                className: "animated",
            }
        }
    }

    toggleAnimation(
        event: Event,
        element: Element = undefined,
        animationName: string = undefined,
        className: string = undefined,): void {

        let animation: Animation = (element ?? event.target["params"].element).getAnimations().filter(isTheAnimation)[0]

        function isTheAnimation(animation) {
            return animation.animationName === (animationName ?? event.target["params"].animationName)
        }

        if (animation === undefined)
            (element ?? event.target["params"].element).classList.toggle(className ?? event.target["params"].className)
        else if (!animation.finished)
            (element ?? event.target["params"].element).classList.toggle(className ?? event.target["params"].className)
    }
}

let ranga: Ranga = new Ranga()
ranga.load()

setTimeout(mottoNotify, 1000)

function mottoNotify(): void {
    ranga.toggleAnimation(
        undefined,
        document.querySelector("#motto strong"),
        "strong", "animated",)
}
