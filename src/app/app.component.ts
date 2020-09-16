import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'currencyconverter';
  basecurr;
  targetcurr;
  amt;
  lastupdated;
  result_amt:number=-1;

  currcodes=['INR', 'AED', 'ARS', 'AUD', 'BGN', 'BRL', 'BSD', 'CAD', 'CHF', 'CLP', 'CNY', 'COP', 'CZK', 'DKK', 'EGP', 'EUR',
  'FJD', 'GBP', 'GTQ', 'HKD', 'HRK', 'HUF', 'IDR', 'ILS', 'ISK', 'JPY', 'KRW', 'KZT', 'MVR', 'MXN', 'MYR', 'NOK', 'NZD', 'PAB',
  'PEN',  'PHP', 'PKR', 'PLN', 'PYG', 'RON', 'RUB', 'SAR', 'SEK', 'SGD', 'THB', 'TRY', 'TWD', 'UAH', 'USD', 'UYU', 'ZAR'
  ]
  
  src_code;
  trg_code;

  constructor(private http: HttpClient){}

  onChangeSrc(){
    this.result_amt=-1;
  }

  onChangeTrg(){
    this.result_amt=-1;
  }

  ngOnInit() {
    var lastcheck= this.http
    .get<any>('https://v6.exchangerate-api.com/v6/70d1c67900469868bd80acbf/latest/INR')
    .subscribe(data=>{
      this.lastupdated= data.time_last_update_utc
      console.log(data);

    });
  }

  bkspfunc(){
    this.result_amt=-1;
  }
  
  convert(){
  // console.log("Called");
   //console.log("Base= " + this.basecurr + "target= " + this.targetcurr, "AMT= " + this.amt)

    var httpobj= this.http
    .get<any>('https://v6.exchangerate-api.com/v6/70d1c67900469868bd80acbf/latest/'+this.basecurr)
    .subscribe(data=>{
    // console.log(data)

    if(this.targetcurr=='INR'){
    this.result_amt= this.amt * data.conversion_rates.INR;
    }
    else if(this.targetcurr=='AED'){
      this.result_amt= this.amt * data.conversion_rates.AED;
      }
    else if(this.targetcurr=='ARS'){
        this.result_amt= this.amt * data.conversion_rates.ARS;
        }
     else if(this.targetcurr=='AUD'){
      this.result_amt= this.amt * data.conversion_rates.AUD;
      }
    else if(this.targetcurr=='BGN'){
        this.result_amt= this.amt * data.conversion_rates.BGN;
        }
     else if(this.targetcurr=='BRL'){
      this.result_amt= this.amt * data.conversion_rates.BRL;
      }
    else if(this.targetcurr=='BSD'){
        this.result_amt= this.amt * data.conversion_rates.BSD;
        }
     else if(this.targetcurr=='CAD'){
      this.result_amt= this.amt * data.conversion_rates.CAD;
      }
    else if(this.targetcurr=='CHF'){
        this.result_amt= this.amt * data.conversion_rates.CHF;
        }

      else if(this.targetcurr=='CLP'){
      this.result_amt= this.amt * data.conversion_rates.CLP;
      }
    else if(this.targetcurr=='CNY'){
        this.result_amt= this.amt * data.conversion_rates.CNY;
        }
     else if(this.targetcurr=='COP'){
      this.result_amt= this.amt * data.conversion_rates.COP;
      }
    else if(this.targetcurr=='CZK'){
        this.result_amt= this.amt * data.conversion_rates.CZK;
        }
        else if(this.targetcurr=='DKK'){
          this.result_amt= this.amt * data.conversion_rates.DKK;
          }
        else if(this.targetcurr=='EGP'){
            this.result_amt= this.amt * data.conversion_rates.EGP;
            }
         else if(this.targetcurr=='EUR'){
          this.result_amt= this.amt * data.conversion_rates.EUR;
          }
        else if(this.targetcurr=='FJD'){
            this.result_amt= this.amt * data.conversion_rates.FJD;
            }

            else if(this.targetcurr=='GBP'){
              this.result_amt= this.amt * data.conversion_rates.GBP;
              }
            else if(this.targetcurr=='GTQ'){
                this.result_amt= this.amt * data.conversion_rates.GTQ;
                }
             else if(this.targetcurr=='HKD'){
              this.result_amt= this.amt * data.conversion_rates.HKD;
              }
            else if(this.targetcurr=='HRK'){
                this.result_amt= this.amt * data.conversion_rates.HRK;
                }
             else if(this.targetcurr=='HUF'){
              this.result_amt= this.amt * data.conversion_rates.HUF;
              }
            else if(this.targetcurr=='IDR'){
                this.result_amt= this.amt * data.conversion_rates.IDR;
                }
             else if(this.targetcurr=='ILS'){
              this.result_amt= this.amt * data.conversion_rates.ILS;
              }
            else if(this.targetcurr=='ISK'){
                this.result_amt= this.amt * data.conversion_rates.ISK;
                }
        
              else if(this.targetcurr=='JPY'){
              this.result_amt= this.amt * data.conversion_rates.JPY;
              }
            else if(this.targetcurr=='KRW'){
                this.result_amt= this.amt * data.conversion_rates.KRW;
                }
             else if(this.targetcurr=='KZT'){
              this.result_amt= this.amt * data.conversion_rates.KZT;
              }
            else if(this.targetcurr=='MVR'){
                this.result_amt= this.amt * data.conversion_rates.MVR;
                }
                else if(this.targetcurr=='MXN'){
                  this.result_amt= this.amt * data.conversion_rates.MXN;
                  }
                else if(this.targetcurr=='MYR'){
                    this.result_amt= this.amt * data.conversion_rates.MYR;
                    }
                 else if(this.targetcurr=='NOK'){
                  this.result_amt= this.amt * data.conversion_rates.NOK;
                  }
                else if(this.targetcurr=='NZD'){
                    this.result_amt= this.amt * data.conversion_rates.NZD;
                    }

                    else if(this.targetcurr=='PAB'){
                      this.result_amt= this.amt * data.conversion_rates.PAB;
                      }
                    else if(this.targetcurr=='PEN'){
                        this.result_amt= this.amt * data.conversion_rates.PEN;
                        }
                     else if(this.targetcurr=='PHP'){
                      this.result_amt= this.amt * data.conversion_rates.PHP;
                      }
                    else if(this.targetcurr=='PKR'){
                        this.result_amt= this.amt * data.conversion_rates.PKR;
                        }
                     else if(this.targetcurr=='PLN'){
                      this.result_amt= this.amt * data.conversion_rates.PLN;
                      }
                    else if(this.targetcurr=='PYG'){
                        this.result_amt= this.amt * data.conversion_rates.PYG;
                        }
                     else if(this.targetcurr=='RON'){
                      this.result_amt= this.amt * data.conversion_rates.RON;
                      }
                    else if(this.targetcurr=='RUB'){
                        this.result_amt= this.amt * data.conversion_rates.RUB;
                        }
                
                      else if(this.targetcurr=='SAR'){
                      this.result_amt= this.amt * data.conversion_rates.SAR;
                      }
                    else if(this.targetcurr=='SEK'){
                        this.result_amt= this.amt * data.conversion_rates.SEK;
                        }
                     else if(this.targetcurr=='SGD'){
                      this.result_amt= this.amt * data.conversion_rates.SGD;
                      }
                    else if(this.targetcurr=='THB'){
                        this.result_amt= this.amt * data.conversion_rates.THB;
                        }
                        else if(this.targetcurr=='TRY'){
                          this.result_amt= this.amt * data.conversion_rates.TRY;
                          }
                        else if(this.targetcurr=='TWD'){
                            this.result_amt= this.amt * data.conversion_rates.TWD;
                            }
                         else if(this.targetcurr=='UAH'){
                          this.result_amt= this.amt * data.conversion_rates.UAH;
                          }
                        else if(this.targetcurr=='USD'){
                            this.result_amt= this.amt * data.conversion_rates.USD;
                            }
                            else if(this.targetcurr=='UYU'){
                              this.result_amt= this.amt * data.conversion_rates.UYU;
                              }
                            else if(this.targetcurr=='ZAR'){
                                this.result_amt= this.amt * data.conversion_rates.ZAR;
                                }
    


    })

  }

}
