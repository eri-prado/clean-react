import { RemoteAuthentication } from "../../../domain/usecases/remote-authentication"
import { HttpPostClientSpy } from "../../test/mock-http-client"


describe('RemoteAuthentication', () => {
  test('Should call HttpPostCliente with correct URL', async () => {

    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy() 
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})