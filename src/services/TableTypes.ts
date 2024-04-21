interface Item {
    func: string,
    what_it_does: string
}

interface Table {
    items: Item[],
    title: string,
}

export type Content = Table[]