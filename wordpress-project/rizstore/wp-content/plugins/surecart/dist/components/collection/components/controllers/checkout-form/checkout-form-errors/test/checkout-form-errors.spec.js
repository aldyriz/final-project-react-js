import{newSpecPage}from"@stencil/core/testing";import{ScCheckoutFormErrors}from"../sc-checkout-form-errors";import{createErrorNotice}from"../../../../../store/notices/mutations";import{updateFormState}from"../../../../../store/form/mutations";describe("ScCheckoutFormErrors",(()=>{it("should render errors",(async()=>{createErrorNotice({code:"test",message:"Error title",additional_errors:[{code:"test2",message:"Additional error 1"},{code:"test3",message:"Additional error 2"}]},{dismissible:!0});const e=await newSpecPage({components:[ScCheckoutFormErrors],html:"<sc-checkout-form-errors></sc-checkout-form-errors>"});expect(e.root).toMatchSnapshot("initial errors"),updateFormState("FETCH"),await e.waitForChanges(),expect(e.root).toMatchSnapshot("cleared due to fetching."),updateFormState("RESOLVE"),createErrorNotice({code:"test",message:"Error title",additional_errors:[{code:"test2",message:"Additional error 1"},{code:"test3",message:"Additional error 2"}]},{dismissible:!0}),await e.waitForChanges(),expect(e.root).toMatchSnapshot("re-added errors after clearing."),updateFormState("FINALIZE"),await e.waitForChanges(),expect(e.root).toMatchSnapshot("cleared due to finalizing.")}))}));