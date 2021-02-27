import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const { name, email } = httpRequest.body
    if (!name) {
      return {
        statusCode: 400,
        body: new Error('Missiing param: name')
      }
    }

    if (!email) {
      return {
        statusCode: 400,
        body: new Error('Missiing param: email')
      }
    }
  }
}
