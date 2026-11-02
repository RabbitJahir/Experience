#============================================================================#
#============================ARCANE CALCULATOR===============================#
#============================================================================#

import hashlib
from cryptography.fernet import Fernet
import base64



# GLOBALS --v
arcane_loop_trial = True
jump_into_full = False
full_version_code = ""

username_trial = "MILLER"
bUsername_trial = b"MILLER"

key_part_static1_trial = "academy{1n_7h3_kk3y_of_"
key_part_dynamic1_trial = "xxxxxxxx"
key_part_static2_trial = "}"
key_full_template_trial = key_part_static1_trial + key_part_dynamic1_trial + key_part_static2_trial

star_db_trial = {
  "Alpha Centauri": 4.38,
  "Barnard's Star": 5.95,
  "Luhman 16": 6.57,
  "WISE 0855-0714": 7.17,
  "Wolf 359": 7.78,
  "Lalande 21185": 8.29,
  "UV Ceti": 8.58,
  "Sirius": 8.59,
  "Ross 154": 9.69,
  "Yin Sector CL-Y d127": 9.86,
  "Duamta": 9.88,
  "Ross 248": 10.37,
  "WISE 1506+7027": 10.52,
  "Epsilon Eridani": 10.52,
  "Lacaille 9352": 10.69,
  "Ross 128": 10.94,
  "EZ Aquarii": 11.10,
  "61 Cygni": 11.37,
  "Procyon": 11.41,
  "Struve 2398": 11.64,
  "Groombridge 34": 11.73,
  "Epsilon Indi": 11.80,
  "SPF-LF 1": 11.82,
  "Tau Ceti": 11.94,
  "YZ Ceti": 12.07,
  "WISE 0350-5658": 12.09,
  "Luyten's Star": 12.39,
  "Teegarden's Star": 12.43,
  "Kapteyn's Star": 12.76,
  "Talta": 12.83,
  "Lacaille 8760": 12.88
}


def intro_trial():
    print("\n===============================================\n\
Welcome to the Arcane Calculator, " + username_trial + "!\n")    
    print("This is the trial version of Arcane Calculator.")
    print("The full version may be purchased in person near\n\
the galactic center of the Milky Way galaxy. \n\
Available while supplies last!\n\
=====================================================\n\n")


def menu_trial():
    print("___Arcane Calculator___\n\n\
Menu:\n\
(a) Estimate Astral Projection Mana Burn\n\
(b) [LOCKED] Estimate Astral Slingshot Approach Vector\n\
(c) Enter License Key\n\
(d) Exit Arcane Calculator")

    choice = input("What would you like to do, "+ username_trial +" (a/b/c/d)? ")
    
    if not validate_choice(choice):
        print("\n\nInvalid choice!\n\n")
        return
    
    if choice == "a":
        estimate_burn()
    elif choice == "b":
        locked_estimate_vector()
    elif choice == "c":
        enter_license()
    elif choice == "d":
        global arcane_loop_trial
        arcane_loop_trial = False
        print("Bye!")
    else:
        print("That choice is not valid. Please enter a single, valid \
lowercase letter choice (a/b/c/d).")


def validate_choice(menu_choice):
    if menu_choice == "a" or \
       menu_choice == "b" or \
       menu_choice == "c" or \
       menu_choice == "d":
        return True
    else:
        return False


def estimate_burn():
  print("\n\nSOL is detected as your nearest star.")
  target_system = input("To which system do you want to travel? ")

  if target_system in star_db_trial:
      ly = star_db_trial[target_system]
      mana_cost_low = ly**2
      mana_cost_high = ly**3
      print("\n"+ target_system +" will cost between "+ str(mana_cost_low) \
+" and "+ str(mana_cost_high) +" stone(s) to project to\n\n")
  else:
      # TODO : could add option to list known stars
      print("\nStar not found.\n\n")


def locked_estimate_vector():
    print("\n\nYou must buy the full version of this software to use this \
feature!\n\n")


def enter_license():
    user_key = input("\nEnter your license key: ")
    user_key = user_key.strip()

    global bUsername_trial
    
    if check_key(user_key, bUsername_trial):
        decrypt_full_version(user_key)
    else:
        print("\nKey is NOT VALID. Check your data entry.\n\n")


def check_key(key, username_trial):

    global key_full_template_trial

    if len(key) != len(key_full_template_trial):
        return False
    else:
        # Check static base key part --v
        i = 0
        for c in key_part_static1_trial:
            if key[i] != c:
                return False

            i += 1

        # TODO : test performance on toolbox container
        # Check dynamic part --v
        if key[i] != hashlib.sha256(username_trial).hexdigest()[4]:
            return False
        else:
            i += 1

        if key[i] != hashlib.sha256(username_trial).hexdigest()[5]:
            return False
        else:
            i += 1

        if key[i] != hashlib.sha256(username_trial).hexdigest()[3]:
            return False
        else:
            i += 1

        if key[i] != hashlib.sha256(username_trial).hexdigest()[6]:
            return False
        else:
            i += 1

        if key[i] != hashlib.sha256(username_trial).hexdigest()[2]:
            return False
        else:
            i += 1

        if key[i] != hashlib.sha256(username_trial).hexdigest()[7]:
            return False
        else:
            i += 1

        if key[i] != hashlib.sha256(username_trial).hexdigest()[1]:
            return False
        else:
            i += 1

        if key[i] != hashlib.sha256(username_trial).hexdigest()[8]:
            return False



        return True


def decrypt_full_version(key_str):

    key_base64 = base64.b64encode(key_str.encode())
    f = Fernet(key_base64)

    try:
        with open("keygenme.py", "w") as fout:
          global full_version
          global full_version_code
          full_version_code = f.decrypt(full_version)
          fout.write(full_version_code.decode())
          global arcane_loop_trial
          arcane_loop_trial = False
          global jump_into_full
          jump_into_full = True
          print("\nFull version written to 'keygenme.py'.\n\n"+ \
                 "Exiting trial version...")
    except FileExistsError:
    	sys.stderr.write("Full version of keygenme NOT written to disk, "+ \
	                  "ERROR: 'keygenme.py' file already exists.\n\n"+ \
			  "ADVICE: If this existing file is not valid, "+ \
			  "you may try deleting it and entering the "+ \
			  "license key again. Good luck")

def ui_flow():
    intro_trial()
    while arcane_loop_trial:
        menu_trial()



# Encrypted blob of full version
full_version = \
b"""
gAAAAABqsz0tCjMmfvKvX9UknU0mNj70SU0EqeIE01b0Ny0oCYZXygTh0BvArTP-zC0T606MZfi7lN09_1-0fT40YYgkixtZI7UuroXlvHSpOYPde01BeUay7bEN4EPcYVmeIPaRHcKQcE4Hqnw-EMQzNosXEtGM8f71WRTdW3vxvA9xiJ-0rbY1Y_XyVoNxKM27-q5dRLYwZ852Jwd5Jr4sXkHe-LI3ZI3uhmBrhx_uWBjagYP1hqL3DWpb46gRf_ZOMD06gfhc2UY5IHD8-t52wf8zWcJsWGrY5DrR_pQ3YjDk2cyelFbXxylSv7ElQPivfk707Wwv9ZxEGJd6E97LwpT_Mn5NPIYtmnyEAgQaldcUQ1u26F-PM_iTb4YEEhVk09B1iLpxVzOBYRWkeJsSs9Wb55WS_St1J7zPTa7wgyYyxu2O_mj2y-jRpWzQCYPuPdRdltUE273-FBJi742NKDdNBom3rjM4rZO5w6GXBfy3DR5F71EGHPEJTk6IDOwe2CsPqRkFTIDM1Z9N1LLQ38NEfyxORfYG9hNBdp0iayeSVykLdiyJQSWnaQfmTUulWx95w-MHvFr3WhxJfl2viWv3SrxC6ehGtYxwyxVmdNXAUEBRUlos-HCKXbdcA6WsbqK8ZVHrySEszg8sAqt3c_Rpo0Vv5phKNSsmk29MGTmEturhhkl3hiZLD9oB25017zl50eq_GRYudOV71LV61Rz5OR2IwJkls6fP3s2AOmKw5X8xt_IVCK1YBcZlxRpPJX4vT94KAGD_oyUNx604jqwtHGqky9Ymhntd_57aSyS41c1m1yJncASdpm8zYEHL5SA80JVCT-dfoByI1gPVKuJFx8W_Mt4WU5QlE4t2YwGmaPkPUjFX0cvVTvhLg28SvxDqmDTrl6gCPy0FmwkklIt3f9-_3sgWhGuiUJKGydjuRUeTLY0wkMnhk6DSozgH5QkIi6S5k1aySv5730ODblFOrmofkrd9e-FYYZFEU3_L7ybxUgv5AD4FeLucyQd4JeBRtHFWjrBEQA9TijlocT49uE_jh-J1NGC8lCz4yQWqb4dC2XEa8PExCF6bum9c743YLair1JDij6qLrOn--fALBxKvuKupRotWDWxmTnscn-1Ki_bxaZOokgH3JJ61mzogWzDdvfglOpdRkZh63wd8d5Or8ycxD3FKVSOw8n-zWO9jKc4vAG8rGfTNd7P0l2-yTkc6i77ZBl6NYbRh03Ai1vCyvXNcEBu1E3a-s1hLwBY_Vc-u0SeXFXHLKHQTaYIi7ZwmlKncsyz3e-Kchp1AqMsUj5eTSeVutUYm8JJndIL1CCzvtjFJJOLw9JmbOel72Z2OiRgJ_jpJRzy7rq7tAQ2tSWZuXssP6BnQZoiWZYpfmcQpWgGYer_cxljAg9Jj2sHWBzr8eh1W4h7kHw8P91GsjCSYgayfKaevGFfFZHSbIBrkXqzVDSwmssssEbRtkMyIQwLRLrVPJHLr-palt74uPpRC9CyRbXUoNy5j8t6dZAImsP7IfKdseQvF1E2b3SwFok-U1WjhV7BmEyTHBo5h0iTlOslmXlMnTgluWk8XeOijJdmohf85B7UHCWTK7-Of0_mSd1MY84xw9ffz0kQvY6w3J7NoKtJmJPtsbXpzCLFS-Vp1qanMCXFEu-mnqDorgf4JPdTn1a6HVUwI9IyqxoAKfD5BWSJuiBLNCHVdFYpmtsV1HDVCeJ4O24be-Dr-Ke5ToSAPmWQBt7k6fOdW3QxBABEYjSSQ7lwBizuhJ8hbvSx8mZR9fhm4tP77PEeSJoXSPo8UCqgcZAwMpULLvJcNMtpJRTtRjdWlfZrasnST1wkMC2MLFtO6Zt3uPvgKBh0SlRLZQdFKZ257mFzvxAC6mCLY5FdmeP2wnxWpz2JipITSS-If46-IhwpAtuf8andzys_vKEprpqnGrg-TJeLUseyRKVZ3UK1UcphzT7EP9_RGg_D5bR-48_JP7wgAuljBbrqxkgwXUmQDQorlbaaCcS-rdbW795emE6uXJk0ZDpRnFGa870mQTsQU-peg9DTpZ2SV-757Uz0-CuCVnvlpRKk2YDVmAewzzWJa9kF41A7-9xm9f8L34rZ8GWTDcQ2TszxXB1m3rJ_wNvtn9__3TmcLRZK9f4cKioOlfAeRj8H0ExSnAIutKQPaNcQXAXx_uqKDGYyAS2kFMj4qjZ3tsYjGiHQ7Csyov5gZM0odfOgjq6axut06fxcIzrrJAAyzM25vUUa6x3ODk_PWyM2ETq6krcppC4vCD43nQqnTAkIE8VqkmpQBoBasmf6H7PicTEnnZ4D_6q0f7OEPaHokGBr-IwAES-GM1W4Hk0qn7T4rMKLwhU4M-q-l_t8lqhsAWaR7nS1FGME6QZYawoFlzSJnLoHq5ECYWs1qooC5oASpUFVeFFFamS0rVa1z-6jhJpzN0JLo72LT8jbJpxD0X5oAwx3ISppd5BtwILH7ebMpUEk3AIXep-bssEfUWtrySvIQFgY3uNb18RgW4nu0xAdXxhgyeAuyOVVGDFXNardo8zFJ-KDRN605vLbL0XnbV9kw1U2-co6CbebKPC6NWJPgNLhLOXC_HCxQCEVORc0la4GY98mxtnNvkG4Go8IV0LTPu8FOGS68rUg_iIetBhkYQGBeyT55IOLbpgfsSmaCZWk11Vdy1h7lCZpqUvDs8AoWn_oATPUqBJ9Xx-RgmhbzGHeVvJC5yQCzziMiyjfMQhfdtEsNsT28tuQKVKnNJFTqdFSnHHzwm0ZwQQsFHuupUD86AZctJMS_GZHfvjOUT50lEF1U2noog14sGr-oenAtJ5SYto_QI3B50_7S_Zc61yWx1ofgguG8BzEnjYSnhytUejkYaUUJvZBNhosC2KUK7GUGeg82Su9tzYHXYUKaNmwXc0-OA2zmGCZLRo0RkqLiZs7keHAFKmE9JtJGx3AltHItaZb1AIcVYUm_zbno_Sst-EB2DO9VyhT67TY3YwNSzZZpp4ax8Jz0KfIecvkfjdFnRMR85un6-Ggbw2togM_gHML5r1Az2GQqTs-xG7WEj2wNB02XG_-6jBBtZIaUdxSs0jlE0_i1ys8TXmeVLd8tjKC8sJub4dLkE9HDCnZ4fBtqQOoma11qgljysvLVsVBbNu9w2ZADqt01yk3xOPNZUh11Mf0rJ60zcDKlfBY7gKOTwUNl1xAyQHo4JdPdFNwJv46Fy3gkSGR2GgHb-jKqGUZJx0GeCMUZyRZV62yxXQHktSFl9EIyiaQixc993TObAQ5kydho-9r8nGd8NWwqNQsPPUUmVSgthfNIR7AEFWgMf5TpEDX38j3iodpP2ceWoYk326O5VvYGcPq18h1Re6whFeMbuKYJrrJJTJuQpoOm9a8ht2zXTtf5ax2Rcu1ad0eGHyO4NB9kEqoo3TA9-1FsdiYn-JHkTiaTsmCTNY3ZGTk41pQdT60qm7dnUzhq6eSK7CxKNNc-BeDpD60iqyux5_iRVzFKgh4w3p7yDEFqoemuFrwWt7t1zc5_ig43SQpqDu4CR64aEklXw_iorjkI4L1caYdKmz_6kPsYPSVjfLv9K7aO6Nc_rqQSf7VpJucCQUpczMNsFSCEW2eUATFTm3g2WMKArFM4_j4sBn1E6JGOMYgVAqvbT2Rrjnxa-h3PSQf2TCaTviTpu0voJiBkt2eTat0cj-unsYjLzquC7h3-rPkyTXpU1Gv9hGSjNC0c4NByyAu0-WQl2ytxO39jdDseYmGQ6qGuBfkjNJ-aQKB1JBSr2hgt3GhjAnfZt-nfLbR-JxMA5C6PcTJWv8DRGhBXoyGLofLPJwUJvQM3C9I5WEt98Nb8dfFn-_2g1_TrTFaQsA==
"""



# Enter main loop
ui_flow()

if jump_into_full:
    exec(full_version_code)
