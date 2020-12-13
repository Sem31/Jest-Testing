const initialize = () => console.log("start test")
const close = () => console.log("close test")

beforeEach(() => initialize())
afterEach(() => close())

beforeAll(() => console.log('before All'));
afterAll(() => console.log('after All'));