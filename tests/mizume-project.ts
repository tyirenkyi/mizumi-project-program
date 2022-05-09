import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { MizumeProject } from "../target/types/mizume_project";

describe("mizume-project", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.MizumeProject as Program<MizumeProject>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
