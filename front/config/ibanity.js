const Ibanity = require('ibanity');

const ibanity = new Ibanity(

  process.env.IBANITY_CERTIFICATE_PATH,
  process.env.IBANITY_KEY_PATH,
  process.env.IBANITY_PASSPHRASE,
);

async function main() {
  /*
 const res = await ibanity.get('financial-institutions');
  const res = await ibanity.SandboxFinancialInstitution.delete
  ('c2787187-8d97-46e0-a261-96b55413da99') */
  const res = await ibanity.SandboxFinancialInstitution.create({
    name: 'finteen',
  });

  console.log(res);
}

main().catch(console.error);
