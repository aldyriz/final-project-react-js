import{newE2EPage}from"@stencil/core/testing";describe("sc-price-range",(()=>{it("renders",(async()=>{const e=await newE2EPage();await e.setContent("<sc-price-range></sc-price-range>");const a=await e.find("sc-price-range");expect(a).toHaveClass("hydrated")}))}));