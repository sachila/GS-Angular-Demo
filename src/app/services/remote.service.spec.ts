import { HttpClient, HttpHandler } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { RemoteService } from "./remote.service";

describe("RemoteService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ providers: [HttpClient, HttpHandler] })
  );

  it("should be created", () => {
    const service: RemoteService = TestBed.get(RemoteService);
    expect(service).toBeTruthy();
  });
});
