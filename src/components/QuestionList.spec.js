describe('The Question List Component', () => {
    beforeAll(() => {
        console.log("Before all!")
    })
    beforeEach(() => {
        console.log("Before each!")
    })

    it.skip('should display a list of items', () => {
        expect(2 + 2).toEqual(4)
    })

    it('should display a list of items', () => {
        expect(2 + 3).toEqual(5)
    })
})